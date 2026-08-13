from django.shortcuts import render

def inicio(request):
    return render(request, 'index.html')

def servicios(request):
    return render(request, 'servicios.html')

def logros(request):
    return render(request, 'logros.html')

def personal(request):
    return render(request, 'personal.html')
# Create your views here.
