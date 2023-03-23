from django.shortcuts import render

# Create your views here.
def cadastro (request):
    return render(request, 'Cadastro.html')



def login(request):
    return render(request, 'signin.html')