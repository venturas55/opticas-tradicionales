from django.db.models import F
from django.views import generic
from django.http import HttpResponse
from django.http import JsonResponse
# Create your views here.

import numpy as np
from scipy.interpolate import Rbf

x = np.array([90, 80, 90, 75, 90, 70, 90, 75, 90, 65, 90, 65, 60, 80, 70, 55, 77, 70, 60, 50, 70, 62, 57, 47, 45, 60, 55, 50, 45, 40, 47, 44, 38, 35, 30])
y = np.array([60, 73, 53, 70, 44, 66, 34, 65, 22, 58, 7, 35, 55, 0, 33, 52, 0, 20, 35, 47, 0, 20, 25, 40, 42, 0, 13, 22, 30, 35, 0, 10, 20, 25, 30])
z = np.array([200, 200, 250, 250, 300, 300, 350, 350, 400, 400, 450, 450, 450, 500, 500, 500, 550, 550, 550, 550, 600, 600, 600, 600, 600, 650, 650, 650, 650, 650, 700, 700, 700, 700, 700])
# Create the RBF interpolator
rbf = Rbf(x, y, z, function='multiquadric')



def index(request):
    return HttpResponse("You're interpolacion in ABACO.")
def RBFevaluar(request, puntoX,puntoY):
    estima= float(rbf(puntoX,puntoY))
    #print(f"Interpolated ({puntoX}, {puntoY}) is  {type(estima)}")
    data = {"x":puntoX,"y":puntoY,"valor": estima/1000}
    #return HttpResponse(f"<h1>{estima}</h1>")
    return JsonResponse(data)
    
    