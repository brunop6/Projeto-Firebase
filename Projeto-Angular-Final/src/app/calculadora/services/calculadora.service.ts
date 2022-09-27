/**
 * Serviço responsável por executar as operações da
 * calculadora.
 * 
 * @author Bruno P. dos Santos <peresbruno6@gmail.com>
 * @since 1.0.0
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /* Constantes referente as 
    operações da calculadora */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Método que realiza as operações matemáticas dados
   * dois números.
   * Suporta as operações soma, subtração, divisão
   * e multiplicação.
   * 
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser executada
   * @return number Resultado da operação
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // resultado da operação

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
        break;
    }
    return resultado;
  }
}
