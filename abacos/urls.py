from django.urls import path

from . import views

app_name = "abacos"
urlpatterns = [
    path("", views.index, name="index"),
    path("RBFevaluar/<int:puntoX>/<int:puntoY>", views.RBFevaluar, name="RBFevaluar"),
]