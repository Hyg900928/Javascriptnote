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
  float elements[100][100];
  int row;
  int col;
};


/**
 * 两个矩阵相乘 结构体 + 指针方式
 * @param matrixA
 * @param matrixB
 * @param matrixC
 */
void matrix_multi_pointer(struct Matrixs *matrixA, struct Matrixs *matrixB, struct Matrixs *matrixC);

/**
 * 矩阵相乘 数组实现方式
 * @param row1
 * @param col1
 * @param row2
 * @param col2
 * @param arr1
 * @param arr2
 * @param arr3
 */
float **matrix_multi_array(int row1, int col1, int row2, int col2, float **arr1, float **arr2);


#endif //PROJECTID__MATRIX_H_


