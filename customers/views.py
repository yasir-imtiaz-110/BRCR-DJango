from django.template import loader
from django.http import HttpResponse


def add(request):
    # return HttpResponse('I am django course')
    # template = loader.get_template('signup.html')
    # return HttpResponse(template.render())
    template = loader.get_template('addcustomer.html')
    return HttpResponse(template.render())

class AddCustomers():
    pass


