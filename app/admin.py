from django.contrib import admin
from .models import  cliente, animal, Empresa, FazPedido, cartao, Pedido

admin.site.register(cliente)
admin.site.register(animal)
admin.site.register(FazPedido)
admin.site.register(cartao)
admin.site.register(Pedido)

# Register your models here.
