import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DadosService } from './dados.service';

enum ChartType {
  all,
  pie,
  pie_3d,
  donut,
  bar,
  line,
  column
}

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private dados: any;

  constructor(private dadosService: DadosService) { }

  ngOnInit() {
    this.dadosService.obterDados().subscribe(
      dados => {
        this.dados = dados;
        this.init();
      }
    );
  }

  /**
   * Inicializa a API de gráficos com delay de 1 segundo,
   * o que permite a integração da API com o Angular.
   *
   * @return void
   */
  init(): void {
    if (typeof (google) !== 'undefined') {
      google.charts.load('current', { 'packages': ['corechart'] });
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 1000);
    }
  }

  /**
   * Método chamado assim que a API de gráficos é inicializada.
   * Reponsável por chamar os métodos geradores dos gráficos.
   *
   * @return void
   */
  exibirGraficos(): void {
    let typeSelect = document.querySelector('#chart_type') as HTMLSelectElement;
    let type = Number(typeSelect.value);

    // Reset visualização dos gráficos
    this.exibirPieChart();
    this.exibir3dPieChart();
    this.exibirBarChart();
    this.exibirLineChart();
    this.exibirColumnChart();
    this.exibirDonutChart();

    switch (type) {
      case ChartType.pie:
        this.exibirPieChart(true);
        break;
      case ChartType.pie_3d:
        this.exibir3dPieChart(true);
        break;
      case ChartType.bar:
        this.exibirBarChart(true);
        break;
      case ChartType.line:
        this.exibirLineChart(true);
        break;
      case ChartType.column:
        this.exibirColumnChart(true);
        break;
      case ChartType.donut:
        this.exibirDonutChart(true);
        break;
      default:
        this.exibirPieChart(true);
        this.exibir3dPieChart(true);
        this.exibirBarChart(true);
        this.exibirLineChart(true);
        this.exibirColumnChart(true);
        this.exibirDonutChart(true);
        break;
    }

  }

  /**
   * Exibe o gráfico Pie Chart.
   *
   * @return void
   */
  exibirPieChart(visualization: boolean = false): void {
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    el.hidden = !visualization;

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe o gráfico Pie Chart em 3D. 
   *
   * @return void
   */
  exibir3dPieChart(visualization: boolean = false): void {
    const el = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();

    el.hidden = !visualization;

    opcoes['is3D'] = true;
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe o gráfico Donut Chart.
   *
   * @return void
   */
  exibirDonutChart(visualization: boolean = false): void {
    const el = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();

    el.hidden = !visualization;

    opcoes['pieHole'] = 0.4;
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe o gráfico Bar Chart.
   *
   * @return void
   */
  exibirBarChart(visualization: boolean = false): void {
    const el = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(el);

    el.hidden = !visualization;

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe o gráfico Line Chart.
   *
   * @return void
   */
  exibirLineChart(visualization: boolean = false): void {
    const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);

    el.hidden = !visualization;

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe o gráfico Column Chart.
   *
   * @return void
   */
  exibirColumnChart(visualization: boolean = false): void {
    const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);

    el.hidden = !visualization;

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Cria e retorna o objeto DataTable da API de gráficos,
   * responsável por definir os dados do gráfico.
   *
   * @return any
   */
  obterDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }

  /**
   * Retorna as opções do gráfico, que incluem o título
   * e tamanho do gráfico.
   *
   * @return any
   */
  obterOpcoes(): any {
    return {
      'title': 'Quantidade de cadastros primeiro semestre',
      'width': 400,
      'height': 300
    };
  }
}
