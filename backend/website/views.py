import json
import logging
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactSubmission

logger = logging.getLogger(__name__)


def home(request):
    """Render the Home page."""
    return render(request, 'index.html')


def about(request):
    """Render the About Us page."""
    return render(request, 'about.html')


def products(request):
    """Render the Products page."""
    return render(request, 'products.html')


def solutions(request):
    """Render the Solutions page."""
    return render(request, 'solutions.html')


@csrf_exempt
@require_POST
def api_contact_submit(request):
    """API endpoint to accept contact form submissions."""
    try:
        data = json.loads(request.body.decode('utf-8'))
    except Exception:
        data = request.POST

    name = data.get('name', '').strip()
    phone = data.get('phone', '').strip()
    email = data.get('email', '').strip()
    company = data.get('company', '').strip()
    service_needed = data.get('service_needed', '').strip() or data.get('service', '').strip()
    message = data.get('message', '').strip()

    if not name or not phone or not email:
        return JsonResponse({
            'status': 'error',
            'message': 'Name, Phone, and Email are required fields.'
        }, status=400)

    # 1. Save submission to database
    submission = ContactSubmission.objects.create(
        name=name,
        phone=phone,
        email=email,
        company=company,
        service_needed=service_needed,
        message=message
    )

    # 2. Attempt sending email notification via SMTP
    email_sent = False
    recipient = getattr(settings, 'RECIPIENT_EMAIL', 'sales@astratechnologies.in')
    sender = getattr(settings, 'DEFAULT_FROM_EMAIL', 'sales@astratechnologies.in')

    email_subject = f"[Astra Website] New Contact Inquiry from {name}"
    email_body = (
        f"New contact inquiry received on Astra Technologies website:\n\n"
        f"• Name: {name}\n"
        f"• Phone: {phone}\n"
        f"• Email: {email}\n"
        f"• Company: {company or 'N/A'}\n"
        f"• Service Needed: {service_needed or 'N/A'}\n"
        f"• Message:\n{message or 'N/A'}\n\n"
        f"Received at: {submission.created_at.strftime('%Y-%m-%d %H:%M:%S')} UTC\n"
    )

    try:
        send_mail(
            subject=email_subject,
            message=email_body,
            from_email=sender,
            recipient_list=[recipient],
            fail_silently=False
        )
        email_sent = True
    except Exception as e:
        logger.warning(f"Failed to dispatch contact email: {e}")

    return JsonResponse({
        'status': 'success',
        'message': 'Thank you! Your inquiry has been submitted successfully.',
        'email_sent': email_sent,
        'id': submission.id
    })

