//
// Created by heyungao on 2023/2/20.
//
#include <stdio.h>
#include <stdlib.h>
#ifndef PROJECTID__MATRIX_H_
#define PROJECTID__MATRIX_H_
#define MAX 3

// 定义新类型
struct Matrixs {
  int elements[100][100];
  int row;
  int col;
};


/**
 * 两个矩阵相乘
 * @param matrixA
 * @param matrixB
 * @param matrixC
 */
void matrix_multi_pointer(struct Matrixs *matrixA, struct Matrixs *matrixB, struct Matrixs *matrixC);


#endif //PROJECTID__MATRIX_H_


