//
// Created by heyungao on 2023/2/17.
//
#include "matrix.h"


void matrix_multi_array(int row1, int col1, int row2, int col2, float arr1[][MAX], float arr2[][MAX], float arr3[][MAX]) {
  int m, k, n;

  if(col1 != row2) {
    printf("matrix_multi_array：所选的矩阵无法相乘\n");
    exit(EXIT_FAILURE);
  }
  for (m = 0; m < row1; ++m)
    for (n = 0; n < col2; ++n)
      for (k = 0; k < col1; ++k) {
        if (k == 0) arr3[m][n] = 0;//为新矩阵C每个元素初始化
        arr3[m][n] += arr1[m][k] * arr2[k][n];
      }
}
