from django.contrib import admin
from .models import  cliente, animal, Empresa, FazPedido, cartao, Pedido, OfereceServico, Servico, Produto, RecebePedido, VendeProduto
admin.site.register(RecebePedido)
admin.site.register(cliente)
admin.site.register(animal)
admin.site.register(FazPedido)
admin.site.register(cartao)
admin.site.register(Pedido)
admin.site.register(OfereceServico)
admin.site.register(Servico)
admin.site.register(Empresa)
admin.site.register(Produto)
admin.site.register(VendeProduto)
# Register your models here.
