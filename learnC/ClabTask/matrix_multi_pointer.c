//
// Created by heyungao on 2023/2/16.
//
#include "matrix.h"

/**
 * 两个矩阵相乘
 * @param matrixA
 * @param matrixB
 * @param matrixC
 */
void matrix_multi_pointer(struct Matrixs *matrixA, struct Matrixs *matrixB, struct Matrixs *matrixC) {
  // 两个矩阵相乘，必须满足矩阵A的列数等于矩阵B的行数
  if(matrixA->col != matrixB->row ) {
    printf("matrix_multi_pointer：所选的矩阵不满足相乘条件，无法相乘\n");
    exit(EXIT_FAILURE);
  }
  int m, k, n;
  for (m = 0; m < matrixA->row; ++m)
    for (n = 0; n < matrixB->col; ++n)
      for (k = 0; k < matrixA->col; ++k) {
        if (k == 0) matrixC->elements[m][n] = 0;//为新矩阵C每个元素初始化
        matrixC->elements[m][n] += matrixA->elements[m][k] * matrixB->elements[k][n];
      }
}
