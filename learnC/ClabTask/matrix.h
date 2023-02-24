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
  * @param a1 选中的第一个数组
  * @param row1 第一个数组的行数
  * @param col1 第一个数组的列数
  * @param a2  选中的第二个数组
  * @param row2 第二个数组的行数
  * @param col2 第二个数组的列数
  * @return 返回一个新的二维数组
  */
float **matrix_multi_array(float *a1, int row1, int col1, float *a2, int row2, int col2);


// 释放内存
void free_matrix(float **arr, int row);


#endif //PROJECTID__MATRIX_H_


