from django.urls import path

from . import views

app_name = "abacos"
urlpatterns = [
    path("", views.index, name="index"),
    path("RBFevaluarK34/<int:puntoX>/<int:puntoY>", views.RBFevaluarK34, name="RBFevaluarK34"),
    path("RBFevaluarK1/<int:puntoX>/<int:puntoY>", views.RBFevaluarK1, name="RBFevaluarK1"),
    path("RBFevaluarK2/<int:puntoX>/", views.RBFevaluarK2, name="RBFevaluarK2"),
]