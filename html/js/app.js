var app = new Vue({
  el: "#alcancesGiratoria",
  data: {
    k3Result: null,
    k4Result: null,
    zona: "huelva",
    TA: "TB",
    Transmisividad: 0.81,
    visibilidad: 8.172,
    horizonte: true,
    tipo: "Nocturna",
    fondo: "Poca",
    umbral1: null,
    destello: "0.5",

    alcance_luminoso_nominal: 25,
    alcance_requerido_CI: 19.3,
    alcance_requerido_CII: 15.2,
    caracteristica:
      "L0.200 Oc2.900 L0.200 Oc8.600 L0.200 Oc2.900 L0.200 Oc2.900 L0.200 Oc8.600 L0.200 Oc2.900 L0.200 Oc2.900 L0.200 Oc2.900 L0.200 Oc8.600",
    apariencia_origen: " GpD(2+4)",
    horizonte: false,
    a2: 914,
    tita: 30,
    a2_I: 563,
    titaI: 19,

    K: 1,
    Kprima: 1,
    K2prima: 1,
    P: 150,
    V: 24,
    Tc: "c",
    Rc: 0.15,
    Tau: 0.8,
    a3_I: 853,
    c3_I: 0.85,
    a3_II: 1168,
    c3_II: 0.85,

    Pf: 0.5,
    b: 1.7,
    L: 89,
    h2: 30,
    h3: 21,
    h4: 11,
    tita1: 31,
    tita2: 80,
    tita3: 31,
    tita4: 62,
    f: 25,
    g: 72,
    n: 2,
    T: 30,
    h: 1.2,
    F3: 0.8,
    F4: 1,
    F5: 1,
    H: 28,

    altura_ojo: 4,
    apariencia_limite: "L0.194 Oc3.806 L0.194 Oc3.806 L0.194 Oc11.806",

    inconveniente: [
      "Alcance nominal insuficiente según el que consta en el Libro de Faros del Instituto Hidrográfico de la Marina",
      "Alcance nominal insuficiente según en el que consta en el Plan de Señales Maritimas de 1985-1989",
      "Alcance luminoso insuficiente para cumplir el Criterio I del Plan de Señales Marítimas 1985-1989 (cobertura en la banda costera de veinte millas náuticas en tiempo medio local).",
      "Alcance luminoso insuficiente para cumplir el Criterio II del Plan de Señales Marítimas 1985-1989 (cobertura en la banda costera de doce millas náuticas en tiempo brumoso local).",
      "Alcance geográfico insuficiente para cumploir el Criterio I del Plan de Señales Maritimas 1985-1989 (cobertura en la banda costera de veinte millas náuticas para 16m de altura).",
      "Alcance geográfico insuficiente para cumploir el Criterio II del Plan de Señales Maritimas 1985-1989 (cobertura en la banda costera de doce millaspara 4m de altura).",
      "Destelo aislado excesivamente corto para facilitar la distinción (se ha estimado así cuando su duración inferior a 0,1s)",
      "Distancia de perceción del haz excesivamente larga (superior a 1/4mn en balizas y 1/2mn en faros para altura del ojo del observador a 4m)",
      "Deslumbramiento en la zona de navegación necesaria para una altura del ojo del observador a 16m",
      "No cumpl el limite del punto 8 del British Standar 942:1949 (divergencia del haz 1/50 o bien de 1.15º)",
      "Apariencia cualitativa inadaptada a la del Plan de Señales Marítimas 1985-1989",
    ],
    transmisionesAtmosfericasV: [
      {
        observatorio: "almeria",
        TB: 8.28,
        TM: 20.15,
        TC: 33.45,
        T90: 7.469,
        T70: 5.22,
      },
      {
        observatorio: "alicante",
        TB: 13.8,
        TM: 23.21,
        TC: 36.89,
        T90: 8.172,
        T70: 5.775,
      },
      {
        observatorio: "barcelona",
        TB: 3.14,
        TM: 11.8,
        TC: 50.74,
        T90: 8.172,
        T70: 5.775,
      },
      {
        observatorio: "sebastian",
        TB: 4.16,
        TM: 19.29,
        TC: 36.27,
        T90: 3.888,
        T70: 6.246,
      },
      {
        observatorio: "santander",
        TB: 2.95,
        TM: 8.11,
        TC: 22.28,
        T90: 3.888,
        T70: 6.246,
      },
      {
        observatorio: "coruna",
        TB: 5.63,
        TM: 12.21,
        TC: 20.78,
        T90: 3.888,
        T70: 6.246,
      },
      {
        observatorio: "vigo",
        TB: 5.43,
        TM: 18.66,
        TC: 22.77,
        T90: 3.888,
        T70: 6.246,
      },
      {
        observatorio: "cadiz",
        TB: 15.7,
        TM: 21.28,
        TC: 25.9,
        T90: 7.469,
        T70: 5.22,
      },
      {
        observatorio: "ceuta",
        TB: 7.86,
        TM: 20.94,
        TC: 31.66,
        T90: 5.76,
        T70: 3.78,
      },
      {
        observatorio: "malaga",
        TB: 5.98,
        TM: 17.74,
        TC: 28.43,
        T90: 7.469,
        T70: 5.22,
      },
      {
        observatorio: "mahon",
        TB: 8.39,
        TM: 17.89,
        TC: 32.65,
        T90: 8.172,
        T70: 5.775,
      },
      {
        observatorio: "mallorca",
        TB: 10.65,
        TM: 20.52,
        TC: 31.42,
        T90: 8.172,
        T70: 5.775,
      },
      {
        observatorio: "ibiza",
        TB: 12.01,
        TM: 25.44,
        TC: 39.09,
        T90: 8.172,
        T70: 5.775,
      },
      {
        observatorio: "tenerife",
        TB: 20.13,
        TM: 24.99,
        TC: 39.33,
        T90: 11.699,
        T70: 8.549,
      },
      {
        observatorio: "palmas",
        TB: 8.48,
        TM: 21.91,
        TC: 41.12,
        T90: 11.699,
        T70: 8.549,
      },
      {
        observatorio: "fuerteventura",
        TB: 12.1,
        TM: 19.68,
        TC: 31.15,
        T90: 11.699,
        T70: 8.549,
      },
      {
        observatorio: "huelva",
        TB: 4.08,
        TM: 10.35,
        TC: 14.11,
        T90: 7.469,
        T70: 5.22,
      },
      {
        observatorio: "valencia",
        TB: 4.26,
        TM: 10.77,
        TC: 25.65,
        T90: 8.172,
        T70: 5.775,
      },
      { observatorio: "prueba", TB: 28, TM: 15, TC: 45, T90: 7, T70: 5 },
    ],
  },
  mounted: function () {
    this.fetchK3Result();
    this.fetchK4Result();
  },
  filters: {
    redondeo2: function (value) {
      if (value != null) return value.toFixed(2);
    },
    redondeo3: function (value) {
      if (value != null) return value.toFixed(3);
    },
  },
  methods: {
    caracteristicaToArray: function () {
      let destellos;
      let destellosAcum;
      let caracteristicaMod;
      let repeticiones, caracteristica;
      caracteristica = this.caracteristica.toLowerCase();
      caracteristica = caracteristica
        .replace(/\ |\(|\[|\[|\)|\]\+/g, "")
        .replace(/,/g, ".")
        .replace(/oc/g, "l")
        .replace(/o/g, "l");

      //Tratamos las posibles repeticiones
      //Si hay X
      if (caracteristica.search("x") != -1) {
        repeticiones = caracteristica.charAt(caracteristica.search("x") + 1); //el siguiente digito al simbolo multiplicacion 'x' es el numero de repeticiones
        let trimado = "x" + repeticiones;
        caract = caracteristica.split(trimado);
        caract[0] = caract[0].repeat(repeticiones);
        caracteristicaMod = caract[0].concat(caract[1]);
      } else caracteristicaMod = caracteristica;

      //Doy por hecho que siempre se alternan L y O empezando por L
      caracteristicaMod = caracteristicaMod.replace("l", "");
      //quito la primera L por no generar un item de array al usar el split
      destellos = caracteristicaMod.split("l");
      destellosAcum = new Array(destellos.length);
      destellosAcum.fill(0, 0, destellos.length);

      //Lo parseo a float
      for (let i = 0; i < destellos.length; i++) {
        destellos[i] = parseFloat(destellos[i]);
      }
      return destellos;
    },
    minimoDestello: function (destellos) {
      let min = 1000;
      for (var i = 0; i < destellos.length; i += 2) {
        if (destellos[i] < min) min = destellos[i];
      }
      return min;
    },
    obtenerTA: function (observatorio, TA) {
      var item = this.transmisionesAtmosfericasV.find(
        (element) => element.observatorio == observatorio
      );
      switch (TA) {
        case "TB":
          return item.TB;
        case "TM":
          return item.TM;
        case "TC":
          return item.TC;
        case "T90":
          return item.T90;
        case "T70":
          return item.T70;
        default:
          return 0;
      }
      //return item;
    },
    getBaseLog: function (x, y) {
      return Math.log(y) / Math.log(x);
    },
    // Fetch the result from the API
    getK34: async function (valor1,valor2) {
      const apiURL = `http://localhost:8000/interpolacion3D/evaluar/${valor1}/${valor2}`;
      const response = await fetch(apiURL);
      const data = await response.json();
      return data.valor; // Return the raw value
    },
    // Call K3 and update k3Result
    fetchK3Result: async function () {
      try {
        this.k3Result = await this.getK34(this.tita1, this.tita2); // Store the result in k3Result 
      } catch (error) {
        console.error("Error in K3:", error);
        this.k3Result = null; // Reset the result in case of error
      }
    },
   
    // Call K3 and update k3Result
    fetchK4Result: async function () {
      try {
        this.k4Result = await this.getK34(this.tita3, this.tita4); // Store the result in k3Result
      } catch (error) {
        console.error("Error in K4:", error);
        this.k4Result = null; // Reset the result in case of error
      }
    },
  },
  computed: {
    c2: function () {
      //Si angulo>30 y=−0.01167x+1.0851
      if (this.tita >= 30) {
        return (-0.01167 * this.tita + 1.0851).toFixed(4);
      } else if (this.tita >= 20) {
        return (-0.0075 * this.tita + 0.96).toFixed(4);
      } else {
        return (
          ((-1 / 200) * this.tita ** 2 + (13 / 10) * this.tita + 0.888) /
          1000
        ).toFixed(4);
      }
    },
    c2_I: function () {
      //TODO: SOLO AÑADO UN +0.2
      //Si angulo>30 y=−0.01167x+1.0851
      if (this.tita >= 30) {
        return (-0.01167 * this.tita + 1.0851).toFixed(4);
      } else if (this.tita >= 20) {
        return (-0.0075 * this.tita + 0.96).toFixed(4);
      } else {
        return (
          (
            ((-1 / 200) * this.tita ** 2 + (13 / 10) * this.tita + 0.888) /
            1000
          ).toFixed(4) + 0.2
        );
      }
    },
    K2: function () {
      // (0, 888) (10,875) (20,835) (30,765)  (40,670) (45,615)  )   (0, 888) (10,875) (30,765)
      //Si angulo <30 y=−0.14x 2 +0.1x+888
      //Si angulo>30  y=−10x+1065    (30,765) (45,615)
      if (this.tita > 30) {
        return ((-10 * this.tita + 1065) / 1000).toFixed(4);
      } else {
        return (
          (-0.14 * this.tita ** 2 + 0.1 * this.tita + 888) /
          1000
        ).toFixed(4);
      }
    },
    A: function () {
      //TODO:
      return this.P / this.V;
    },
    L1: function () {
      //TODO:
      return 1689.44;
    },
    tau0: function () {
      console.log(this.caracteristicaToArray(this.caracteristica));
      return this.minimoDestello(
        this.caracteristicaToArray(this.caracteristica)
      );
    },
    tau: function () {
      //TODO:
      //return (0.024);
      return (this.tau0 * this.F2).toFixed(3);
    },
    taucorregido: function () {
      //reta 90%  figura III.26
      return (this.A * this.F2).toFixed(3);
    },
    F1: function () {
      //TODO:
      return 0.16;
    },
    F2: function () {
      //TODO:
      return 0.93;
    },
    X: function () {
      //TODO:
      return 0.581;
    },
    TC: function () {
      //TODO:
      return 0.74;
    },
    L2: function () {
      //TODO:
      return 0.74;
    },
    L3: function () {
      //TODO:
      return 0.74;
    },
    L4: function () {
      //TODO:
      return 0.74;
    },
    R1: function () {
      //TODO:
      return 0.74;
    },
    R: function () {
      //TODO:
      return 0.74;
    },
    F: function () {
      //TODO:
      return 0.74;
    },
    getTA: function () {
      return this.obtenerTA(this.zona, this.TA);
    },
    alcance_luminoso_nominal_calculado: function () {
      //console.log((this.obtenerTA(this.zona, this.TA)));
      //NEWTON RAPSHON!!! con poca luminancia de fondo 0.000002
      var D = this.alcance_luminoso_nominal,
        fx,
        fprimax,
        vis;
      vis = 9;
      vis = this.obtenerTA(this.zona, this.TA);
      //console.log(vis);
      if (vis > 1) {
        do {
          //fx = 0.686 * D ** 2 - this.Icalculo * vis ** D;
          fx =
            this.Icalculo -
            3430000 * 2 * 10 ** -6 * D ** 2 * 0.05 ** -(D / vis);
          //fprimax = 2 * 0.686 * D - (this.Icalculo * vis ** D) * this.getBaseLog(Math.E,vis);
          fprimax = -[
            0.05 ** -(D / vis) * 2 * 3430000 * 2 * 10 ** -6 * D +
              3430000 *
                2 *
                10 ** -6 *
                D ** 2 *
                this.getBaseLog(Math.E, 0.05) *
                0.05 ** -(D / vis) *
                (-1 / vis),
          ];
          D = D - fx / fprimax;
          //console.log(fx + " " + fprimax + " " + fx / fprimax + " " + D);
        } while (fx / fprimax > 0.01);
      }

      return D.toFixed(2);
    },
    dv: function () {
      return ((2 * Math.atan(this.h / 2 / this.f) * 180) / Math.PI).toFixed(2);
    },
    alcance_geografico: function () {
      return (2.08 * (Math.sqrt(this.H) + Math.sqrt(this.altura_ojo))).toFixed(
        2
      );
    },
    Iestacionaria: function () {
      if (this.horizonte) {
        return (
          this.K *
          [
            this.b *
              (this.h2 * this.L2 * this.K2 +
                this.h3 * this.L3 * this.K3 +
                this.K2prima * this.h4 * this.L4 * this.K4),
          ]
        ).toFixed(2);
      } else {
        return (
          this.L1 *
          (this.a2 * this.c2 +
            this.a2_I * this.c2_I +
            this.a3_I * this.Pf * this.c3_I +
            this.a3_II * this.Pf * this.c3_II)
        ).toFixed(2);
      }
    },
    Ieficaz: function () {
      return (this.Iestacionaria * this.F1).toFixed(2);
    },
    Icalculo: function () {
      return (this.Ieficaz * ((this.F3 * this.F4) / this.F5)).toFixed(2);
    },
  },
  watch: {
    // Watch for changes in tita1 or tita2
    tita1() {
      this.fetchK3Result();
    },
    tita2() {
      this.fetchK3Result();
    },
    tita3() {
      this.fetchK4Result();
    },
    tita4() {
      this.fetchK4Result();
    },
  },
});
