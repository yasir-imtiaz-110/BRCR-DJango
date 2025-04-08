from django.db import models
from django.core.exceptions import ValidationError
from phonenumber_field.modelfields import PhoneNumberField
from django.utils.translation import gettext_lazy as _

class Customer(models.Model):
    RESIDENT_CHOICES = [
        ('Resident', 'Resident with Emirates ID'),
        ('GCC', 'GCC National'),
        ('Tourist', 'Tourist'),
    ]

    RELATION_CHOICES = [
        ('B2C-Direct', 'B2C-Direct Customer'),
        ('B2C-CommissionAgent', 'B2C-Commission Agent'),
        ('B2C-Indirect', 'B2C-Commission Agent Customer'),
    ]

    CUSTOMER_CHOICES = [
        ('B2B', 'Business to Business'),
        ('B2C', 'Business to Customer')
    ]

    customer_type = models.CharField(max_length=66, choices=RESIDENT_CHOICES, null=True, blank=True)                #resident with EmiratesID/ GCC national /tourist 
    first_name = models.CharField(max_length=110)                                                                       #First name for B2C, Company name for B2B
    last_name = models.CharField(max_length=110)                                                                        #last name for B2C, Owner Name for B2B 
    phone = PhoneNumberField(_("Phone Number"), unique=True)
    # nationality = models.CharField(max_length=110)                                                                    #FOR B2C 
    id_card_no = models.CharField(max_length=110, unique=True, blank=True, null=True)                                   #ID no FOR B2C, Company TRN for B2B 
    id_issued_by = models.CharField(max_length=110, null=True, blank=True)                                              #FOR B2C 
    id_issue_date = models.DateField(null=True, blank=True)                                                             #FOR B2C 
    id_expiry_date = models.DateField(null=True, blank=True)                                                            #FOR B2C 
    license_no = models.CharField(max_length=110, unique=True)                                                          #Driving Licence No FOR B2C, Traffic Code No for B2B  
    license_issued_by = models.CharField(max_length=110, null=True, blank=True)                                         #FOR B2C  
    license_issue_date = models.DateField( null=True, blank=True)                                                       #FOR B2C  
    license_expiry_date = models.DateField(null=True,blank=True)                                                        #FOR B2C  
    relation_type = models.CharField(max_length=66, choices=RELATION_CHOICES, null=True, blank=True)
    reference = models.CharField(max_length=110, null=True, blank=True)
    # gcc_country = models.CharField(max_length=110, null=True, blank=True)
    # gcc_state = models.CharField(max_length=110, null=True, blank=True)
    # IDOrPassportImageFront = models.ImageField(_("id/passport image1"), upload_to="images/", null=True, blank=True)
    # IDOrPassportImageBack = models.ImageField(_("id/passport image2"),upload_to="images/", null=True, blank=True )
    # DrivingLicenceImageFront = models.ImageField(upload_to="images/", null=True, blank=True)
    # DrivingLicenceImageBack = models.ImageField(upload_to="images/", null=True, blank=True)
    TradeLicence = models.ImageField(upload_to="images/", null=True, blank=True)                                    #B2B customers
    # tax_return_no = models.CharField(max_length=110, unique=True, blank=True, null=True)                            #B2B customers
    # ExtraImage = models.ImageField(upload_to="images/", null=True, blank=True)
    describtion = models.TextField(verbose_name="Description", null=True, blank=True)                               #B2B n B2C customers
    BtbOrBtC = models.CharField(max_length=11, choices=CUSTOMER_CHOICES)                                            #B2B customers

    def clean(self):
        if not self.passport and not self.id_card:
            raise ValidationError('Either passport or ID card must be provided.')

    def save(self, *args, **kwargs):        #overriding save method
        self.clean()                        #Ensuring the validation is checked on save as well
        super().save(*args, **kwargs)       #implicent call to save method after overriding

    class Meta:
        verbose_name = _("Customer")
        verbose_name_plural = _("Customers")

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

