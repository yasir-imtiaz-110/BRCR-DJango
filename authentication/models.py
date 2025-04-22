# from django.db import models



# # class Member(models.Model):
# #   firstname = models.CharField(max_length=255)
# #   lastname = models.CharField(max_length=255)

# class users(models.Model):
#     firstname = models.CharField(max_length=66)
#     lastname = models.CharField(max_length=110)
#     username = models.CharField(max_length=110)
#     password = models.CharField(max_length=444)
#     email = models.CharField(max_length=110, unique=True)
#     mobile = models.CharField(max_length=31)
#     date_of_birth = models.DateField(null=True,blank=True)
#     id_card_number = models.CharField(max_length=21)
#     joining_date = models.DateField()
#     designation = models.CharField(max_length=11)
#     home_address = models.CharField(max_length=444,null=True, blank=True)
#     is_active_user = models.BooleanField(default=True)
#     user_roles = models.CharField(max_length=50)
#     last_login = models.DateTimeField(null=True,blank=True)
#     is_superuser = models.BooleanField(default=False)


#     def __str__(self):
#         return self.firstname


from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email is required')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)
        return self.create_user(email, password, **extra_fields)

class users(AbstractBaseUser, PermissionsMixin):
    firstname = models.CharField(max_length=66)
    lastname = models.CharField(max_length=110)
    username = models.CharField(max_length=110, unique=True)
    email = models.EmailField(max_length=110, unique=True)
    mobile = models.CharField(max_length=31)
    date_of_birth = models.DateField(null=True, blank=True)
    id_card_number = models.CharField(max_length=21)
    joining_date = models.DateField()
    designation = models.CharField(max_length=11)
    home_address = models.CharField(max_length=444, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    user_roles = models.CharField(max_length=50)
    last_login = models.DateTimeField(null=True, blank=True)

    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'firstname', 'lastname']

    def __str__(self):
        return self.firstname