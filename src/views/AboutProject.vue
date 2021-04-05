<template>
  <div class="container3">
    <div class="primary containerDrawer">
      <v-btn to="/" class="backButton">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </div>

    <div class="containerImg">
      <v-img alt="Logo UnB" src="../assets/LogoSemFundo_CorAlternativa.png" contain />
    </div>
    <div class="containerAbout">
      <p>No dia 03 de abril de 2020, a professora Juliana Soledade (LIP-IL-UnB) recebeu o convite para participar da iniciativa “Dissemina amor UFBA”, organizado pelos professores de Letras da UFBA. O Dissemine amor é um grupo criado na Bahia para ajudar trabalhadores informais que na pandemia perderam a renda. A ideia central é ser um elo entre aqueles que querem ajudar (os doadores) e aqueles que precisam (os beneficiários). </p>
      <p>Assim, o grupo de organizadores tem a missão de localizar as pessoas que estão com dificuldades para sustentar suas famílias e as pessoas que podem doar. As cotas são de 50 reais, e cada um pode doar quantas cotas quiser. Depois de juntar os doadores, pedimos as contas bancárias dos beneficiários e as informamos aos doadores, que depositam suas doações diretamente ali, sem que o dinheiro precise passar pela mão dos organizadores. Então, organizamos os grupos de doadores de forma que o valor seja igualitário para todos os que recebem.</p>
      <p>Professora Juliana, então, levou a ideia ao grupo de professores do Instituto de Letras, da Universidade de Brasília, e a professora Fernanda Alencar Pereira (LET-IL-UnB) abraçou a ideia. Assim, desde abril de 2020, a duas professoras, com o auxílio de outros professores (listados abaixo), têm ajudado mensalmente profissionais informais da UnB, que sofrem com o esvaziamento do Campus Darcy Ribeiro. Até agora, são 16 beneficiários. No primeiro mês, conseguimos R$ 700,00 para cada família (eram 10 famílias apenas). Com o aumento de beneficiários e alguma redução no número de doadores estamos mantendo uma média de R$ 300,00 por mês para cada. </p>
      <p>Os beneficiários são famílias dos trabalhadores informais do campus Darcy Ribeiro na UnB. Localizamos essas famílias através da indicação de estudantes, colegas e dos próprios trabalhadores informais. Um fato bacana, naquele primeiro contato, foi que algumas pessoas contatadas disseram que não precisariam e indicaram colegas mais necessitados. </p>
      <p>Os doadores incialmente eram professoras do Instituto de Letras, que ainda compõem a maior parte dos doadores que permanecem colaborando. Mas há ainda muitos professores de outras unidades da universidade, estudantes e ex-alunos da UnB que ajudam regularmente. Nesse sentido, a divulgação feita pela aluna de pós-graduação Juliana Queiroz foi fundamental. Através das redes sociais, muitos ex-alunos entraram em contato com ela e puderam também contribuir.</p>
      <p>Com a divulgação da campanha no DFTV, novos doadores aparecerem, bem como novos beneficiários. Além disso, surgiu a oferta de criação de um aplicativo de organização de doações, por parte do laboratório LATITUDE, coordenado pelo professor Rafael Timóteo de Sousa (FT – UnB).</p>
      <p>A sensação de atuar nesse projeto é de estar fazendo, pelo menos, o mínimo possível para ajudar a quem precisa. No entanto, o desejo do grupo é de que o país oferecesse condição a todo cidadão de ter casa, comida, saúde e educação, com ou sem pandemia, mas infelizmente essa não é nossa realidade. Assim é nosso compromisso social fazer o possível, para minimizar as perdas dessas famílias de trabalhadores informais da UnB.</p>
      <p>As pessoas listadas abaixo se comprometeram com a campanha, ajudando na organização dos doadores e distribuição dos valores:</p>
      <div class="names">
      <p>Juliana Soledade</p>
      <p>Fernanda Alencar Pereira</p>
      <p>Juliana Santos Queiroz</p>
      <p>Elisa Duarte Teixeira</p>
      <p>Carmen Aranda</p>
      <p>Elton Bruno Pinheiro</p>
      <p>Rodolfo Lopes</p>
      <p>Roberta Cantarela</p>
      <p>Priscilla Maia Andrade </p>
      </div>

      <p>Caso queira se tornar um doador, envie mensagem para <strong>dissemineamorunb@gmail.com</strong></p>

      <p class="signature">Juliana Soledade</p>
      <p class="signature">Fernanda Alencar Pereira</p>

    </div>

    <div style="display: flex; margin-bottom: 20px">
      <div style="margin-right: 100px">
        <h5>Beneficiários Ativos</h5>
        <doughnut-chart v-if="loaded" :data="doughnutData" :options="doughnutOptions"></doughnut-chart>
      </div>

      <div>
        <h5>Doadores Ativos</h5>
        <bar-chart v-if="loaded" :data="barData" :options="barOptions"></bar-chart>
      </div>

    </div>

    <div>
      <h5>Valores Coletados</h5>
      <bar-chart v-if="loaded" :data="bar2Data" :options="bar2Options"></bar-chart>
    </div>
    
    <br/>
    
  </div>

  
</template>

<script>
// @ is an alias to /src
import DoughnutChart from '../components/DoughnutChart.js'
import BarChart from '../components/BarChart.js'
import { Administrator } from "../functions/administrator.js"
let Admin = new Administrator();

export default {
  components: { DoughnutChart, BarChart },
  data: () => ({
    data: {},
    test: [],
    loaded: false,
    drawer: false,
    group: null,
    doughnutOptions: {
      hoverBorderWidth: 20
    },
    doughnutData: null,
    barOptions: {
      hoverBorderWidth: 20
    },
    barData: null,
    bar2Options: {
      hoverBorderWidth: 20
    },
    bar2Data: null
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  },

  methods: {
    
  },

  async mounted () {
  
    this.loaded = false
    try {
      this.data = ( (await Admin.public_info()).data )
    } catch (e) {
      console.error(e)
    }
    
    this.loaded = true

    let dates = [];
    let beneficiaryAmounts = [];
    let donatorAmounts = [];
    let collectedAmounts = [];

    let i;

    for(i = 0; i < this.data.length; i++) {
      dates.push(this.data[i].date);
      beneficiaryAmounts.push(this.data[i].beneficiary_amount);
      donatorAmounts.push(this.data[i].donator_amount);
      collectedAmounts.push(this.data[i].collected_amount);
    }

    this.doughnutData = {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: dates,
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            // data: [this.data[0].beneficiary_amount,this.data[0].beneficiary_amount,this.data[0].beneficiary_amount]
            data: beneficiaryAmounts
          }
        ]
      }

    this.barData = {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: dates,
        datasets: [
          {
            label: "Doadores Ativos",
            backgroundColor: ["#E46651", "#00D8FF", "#41B883"],
            // data: [this.data[0].beneficiary_amount,this.data[0].beneficiary_amount,this.data[0].beneficiary_amount]
            data: donatorAmounts
          }
        ]
      }

      this.bar2Data = {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: dates,
        datasets: [
          {
            label: "Valor Coletado",
            backgroundColor: ["#00D8FF", "#41B883", "#E46651" ],
            // data: [this.data[0].beneficiary_amount,this.data[0].beneficiary_amount,this.data[0].beneficiary_amount]
            data: collectedAmounts
          }
        ]
      }

  }
};
</script>

<style scoped>
.container3 {
  background-color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
}

.containerDrawer {
  width: 100%;
  height: 7%;
  display: flex;
  align-items: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.containerAbout {
  width: 80%;
  text-align: justify;
  color: black;
}

.containerMenu {
  width: 85%;
  display: flex;
  justify-content: space-between;
}

.containerImg {
  width: 70% !important;
  padding-top:6%;
  padding-bottom:1%;
  max-height: 400px !important;
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.infobox {
  background-color: white;
  color: #547a9c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.donations {
  width: 88%;
}

.menu {
  width: 45%;
  text-align: center;
}

.backButton {
  background-color: transparent !important;
  color: white !important;
  box-shadow: none !important;
}

.signature {
  text-align: right;
}

.names {
    color: #547a9c;
}
</style>
