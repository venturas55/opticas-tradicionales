from django.db.models import F
from django.views import generic
from django.http import HttpResponse
from django.http import JsonResponse
# Create your views here.

import numpy as np
from scipy.interpolate import Rbf

#abako k3,k4
x = np.array([90, 80, 90, 75, 90, 70, 90, 75, 90, 65, 90, 65, 60, 80, 70, 55, 77, 70, 60, 50, 70, 62, 57, 47, 45, 60, 55, 50, 45, 40, 47, 44, 38, 35, 30])
y = np.array([60, 73, 53, 70, 44, 66, 34, 65, 22, 58, 7, 35, 55, 0, 33, 52, 0, 20, 35, 47, 0, 20, 25, 40, 42, 0, 13, 22, 30, 35, 0, 10, 20, 25, 30])
z = np.array([200, 200, 250, 250, 300, 300, 350, 350, 400, 400, 450, 450, 450, 500, 500, 500, 550, 550, 550, 550, 600, 600, 600, 600, 600, 650, 650, 650, 650, 650, 700, 700, 700, 700, 700])


#abako k1
x1 = np.array([89,86,89,85,82.5,89,79,89,82,74,89,80,72,89,80,69.5,89,77.5,67,89,82,64,89,75,60,87,72,55,80.5,70,50,73.5,65,49,64.6,53,40,52,43,33,37,31,23])
y1 = np.array([70,75,65,72,75,60,75,53,65,75,47,62,72,40,56,70,31,52.5,67,20,45,65,13,40,62.5,0,35,59,0,25,54,0,20,45,0,25,44,0,20,35,0,15,25])
z1 = np.array([250,250,300,300,300,350,350,400,400,400,450,450,450,500,500,500,550,550,550,600,600,600,650,650,650,700,700,700,750,750,750,800,800,800,850,850,850,900,900,900,950,950,950])

#abako k2
x2 = np.array([0,5,10,15,20,25,30,35,40,45,48])
y2 = np.array([0.888,0.885,0.875,0.856,0.835,0.805,0.765,0.722,0.670,0.615,0.580])


# Create the RBF interpolator
rbfk34 = Rbf(x, y, z, function='multiquadric')
rbfk1 = Rbf(x1, y1, z1, function='multiquadric')



def index(request):
    return HttpResponse("You're interpolacion in ABACO.")
def RBFevaluar(request, puntoX,puntoY):
    estima= float(rbfk34(puntoX,puntoY))
    #print(f"Interpolated ({puntoX}, {puntoY}) is  {type(estima)}")
    data = {"x":puntoX,"y":puntoY,"valor": estima/1000}
    #return HttpResponse(f"<h1>{estima}</h1>")
    return JsonResponse(data)
    
    