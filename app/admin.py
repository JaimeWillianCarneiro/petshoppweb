from django.contrib import admin
from .models import  cliente, animal, Empresa, FazPedido, cartao, Pedido, OfereceServico, Servico, Produto

admin.site.register(cliente)
admin.site.register(animal)
admin.site.register(FazPedido)
admin.site.register(cartao)
admin.site.register(Pedido)
admin.site.register(OfereceServico)
admin.site.register(Servico)
admin.site.register(Produto)
# Register your models here.
