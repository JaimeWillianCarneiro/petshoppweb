from django.db import models

# Create your models here.
class cliente(models.Model):
    
    nome= models.CharField(max_length=50)
    email = models.CharField(max_length=30)
    telefone = models.IntegerField()
    cpf = models.IntegerField()
    senha = models.CharField(max_length=12)
    def __str__(self):
            return f"{self.nome}"   


class animal(models.Model):
    idCliente = models.ForeignKey(cliente, on_delete=models.CASCADE)
    raca = models.CharField(max_length=30)
    Nome = models.CharField(max_length=50)
    sexo = models.CharField(max_length=10)
    def __str__(self):
        return f"{self.Nome}"

class cartao(models.Model):
    n_cartao = models.IntegerField()
    bandeira = models.CharField(max_length=30)
    idCliente = models.ForeignKey(cliente, on_delete=models.CASCADE)
    class Meta:
        constraints=[models.UniqueConstraint(fields=['n_cartao','idCliente'], name = 'unique_ncartao_idcliente_combination')]
    def __str__(self):
        return f"{self.n_cartao}"

class Pedido(models.Model):
	data = models.DateTimeField()
	Preco = models.FloatField()
	Cod_servico = models.IntegerField()
	Cod_Produto = models.IntegerField()


class Empresa(models.Model):
    endereco = models.CharField(max_length=300)
    cnpj = models.IntegerField()
    telefone = models.IntegerField()
    def __str__(self):
        return f"{self.endereco}"

class RecebePedido(models.Model):
    # class Meta:
    #     unique_together = (('cdEmpresa', 'id_pedido'),)
    cdEmpresa = models.ForeignKey(Empresa,  on_delete=models.CASCADE)
    id_pedido = models.ForeignKey(Pedido,  on_delete=models.CASCADE)
    
class Pagamento(models.Model):
    Data_pagamento = models.DateField()
    tipo = models.CharField(max_length=20)
   
class FazPedido(models.Model):
    # class Meta:
    #     unique_together = (('idCliente', 'idPedido'),)
    idCliente = models.ForeignKey(cliente, on_delete=models.CASCADE)
    idPedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    idPagamento =    models.ForeignKey(Pagamento, on_delete=models.CASCADE)

class Servico(models.Model):
    valor = models.FloatField()
    duracao = models.IntegerField()
    tipo = models.CharField(max_length=30)
    local = models.CharField(max_length=200)
    
class Produto(models.Model):
    nome = models.CharField(max_length=50)
    especieDest= models.CharField(max_length=50)
    marca= models.CharField(max_length=50)
    quantidade = models.IntegerField()
    
class VendeProduto(models.Model):
    Cod_produto = models.ForeignKey(Produto,on_delete=models.CASCADE )
    Cd_Empresa = models.ForeignKey(Empresa,on_delete=models.CASCADE )

class OfereceServico(models.Model):
    Cod_servico = models.ForeignKey(Servico,on_delete=models.CASCADE )
    Cd_Empresa = models.ForeignKey(Empresa,on_delete=models.CASCADE )


