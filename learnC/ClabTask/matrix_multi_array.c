//
// Created by heyungao on 2023/2/17.
//

#include <stdio.h>
#include <stdlib.h>
#define MAX 3
// 矩阵相乘
// 求 m*k 型矩阵 A 左乘 k*n 型矩阵 B 后的 m*n 型矩阵 C


// 矩阵枚举
enum matrixs {arr1 = 1, arr2, arr3, arr4};

// 声明数组
float a1[] = {
    2, 3, 4,
    5, 6, 7,
    8, 9, 10
};
float a2[] = {
    7, 3, 9,
    13, 6, 7,
    8, 14, 10
};

float a3[] = {
    7, 3, 9,
    13, 6, 7
};

float a4[] = {
    7, 3,
    13, 6,
    8, 10
};

void matrix_multi_array(int row1, int col1, int row2, int col2, int arr1[][MAX], int arr2[][MAX], int arr3[][MAX]) {
  int m, k, n;

  if(col1 != row2) {
    printf("所选的矩阵无法相乘");
    exit(EXIT_FAILURE);
  }
  for (m = 0; m < row1; ++m)
    for (n = 0; n < col2; ++n)
      for (k = 0; k < col1; ++k) {
        if (k == 0) arr3[m][n] = 0;//为新矩阵C每个元素初始化
        arr3[m][n] += arr1[m][k] * arr2[k][n];
      }
}


float * initialArray(int *row, int *col, enum matrixs num){

  // 一个指向整数的指针
  switch (num) {
    case arr1:
      printf("选中的是a1\n");
      *row = 3;
      *col = 3;
      return a1;
    case arr2:
      printf("选中的是a2\n");
      *row = 3;
      *col = 3;
      return a2;
    case arr3:
      printf("选中的是a3\n");
      *row = 2;
      *col = 3;
      return a3;
    case arr4:
      printf("选中的是a4\n");
      *row = 3;
      *col = 2;
      return a3;
    default:
      printf("超出选择范围\n");
      return NULL;
  }
}

void tranformArrayToMatrixs(float *ptr, int *row, int *col, int arr[3][3]) {
  for(int i = 0; i < *row; i++)
    for (int j = 0; j < *col; ++j) {
      arr[i][j] = *(ptr + i * (*col) + j);
    }
}


int main() {
  enum  matrixs num1;
  enum  matrixs num2;
  int row1, col1, row2, col2;
  float *selected_ptr1;
  float *selected_ptr2;
  int arr1[3][3];
  int arr2[3][3];

  // 定义结果矩阵
  int arr3[3][3];
  printf("请输入两个矩阵标号: (1. a1, 2. a2, 3. a3, 4. a4): ");
  scanf("%u %u", &num1, &num2);

  // 初始化数组
  selected_ptr1 = (float *) initialArray(&row1, &col1, num1);
  selected_ptr2 = (float *) initialArray(&row2, &col2, num2);

  // 初始化矩阵
  tranformArrayToMatrixs(selected_ptr1, &row1, &col1, arr1);
  tranformArrayToMatrixs(selected_ptr2, &row2, &col2, arr2);

  // 两个矩阵相乘
  matrix_multi_array(row1, col1, row2, col2, arr1, arr2, arr3);

  printf("\n矩阵a1左乘矩阵a2为：\n\n");
  for (int i = 0; i< row1; ++i)
  {
    printf("  |");
    for (int j = 0; j < col2; ++j)
    {
      printf(" %-6d", arr3[i][j]);
    }
    printf("\b\b|\n");
  }
  printf("\n");
  return 0;
}
