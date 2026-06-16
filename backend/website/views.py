from django.shortcuts import render


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
