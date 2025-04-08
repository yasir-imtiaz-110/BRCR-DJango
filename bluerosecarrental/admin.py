
from django.contrib import admin
from authentication.models import users

class UsersAdmin(admin.ModelAdmin):
    pass
admin.site.register(users,UsersAdmin)

