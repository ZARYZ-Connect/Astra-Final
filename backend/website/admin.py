from django.contrib import admin
from .models import ContactSubmission


@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'service_needed', 'company', 'created_at')
    list_filter = ('service_needed', 'created_at')
    search_fields = ('name', 'email', 'phone', 'company', 'message')
    readonly_fields = ('created_at',)

