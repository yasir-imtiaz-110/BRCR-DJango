from django.db import models

# Create your models here.

class vehicles(models.Model):
    vehicleName = models.CharField(max_length=110)
    companyName = models.CharField(max_length=110)
    noPlate = models.CharField(max_length=11)
    vehicleCondition = models.CharField(max_length=11)              #good/average/bad
    purchasedFrom = models.CharField(max_length=110, null=True, blank=True)
    vehcileModel = models.CharField(max_length=12)       #year e.g 2024
    purchasingDate = models.DateField(null=True, blank=True)     
    sellingDate = models.DateField(null=True, blank=True)
    ownershipStatus = models.CharField(max_length=21)   #sold/purchased
    rentStatus = models.CharField(max_length=31)         #rent in/rent out/borrowed in/ borrowed out
    vehicleColor = models.CharField(max_length=21)
    chasesNo = models.CharField(max_length=66)
    engineNo = models.CharField(max_length=66)
    ownerName = models.CharField(max_length=110)
    lastServiceDate = models.DateField()
    nextServiceDate = models.DateField()
    totalServiceKM = models.IntegerField()   #e.g after every 10,000 or 15,000 
    lastServiceKM = models.IntegerField()    
    nextServiceKM = models.IntegerField()
    lastCarPassingDate = models.DateField()
    nextCarPassingDate = models.DateField()
    purchasingPrice = models.DecimalField(max_digits=12, decimal_places=2)
    sellingPrice = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    vehicleStatus = models.CharField(max_length=31)      #available/out for service/rented out
    kmRangePerDay = models.IntegerField()
    extraChargesPerKM = models.DecimalField(max_digits=11, decimal_places=2)
    image1 = models.ImageField(upload_to='images/',null=True, blank=True)
    image2 = models.ImageField(upload_to='images/',null=True, blank=True)
    image3 = models.ImageField(upload_to='images/',null=True, blank=True)
    image4 = models.ImageField(upload_to='images/',null=True, blank=True)
    image5 = models.ImageField(upload_to='images/',null=True, blank=True)

    def __str__(self):
        return self.name
    

