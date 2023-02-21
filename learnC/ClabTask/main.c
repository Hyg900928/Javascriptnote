#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "matrix.h"

// 矩阵相乘
// 求 m*k 型矩阵 A 左乘 k*n 型矩阵 B 后的 m*n 型矩阵 C

// 定义新类型
//struct Matrixs {
//  int elements[100][100];
//  int row;
//  int col;
//};

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

/**
 * 根据所选编号，初始化结构变量
 * @param num
 * @param matrixsD
 */
void initialMatrix(enum matrixs num, struct Matrixs *matrixsD) {
  int row, col;

  float *ptr;
  switch (num) {
    case arr1:
      row = 3;
      col = 3;
      ptr = a1;
      break;
    case arr2:
      row = 3;
      col = 3;
      ptr = a2;
      break;
    case arr3:
      row = 2;
      col = 3;
      ptr = a3;
      break;
    case arr4:
      row = 3;
      col = 2;
      ptr = a4;
      break;
    default:
      printf("initialMatrix：所选编号不存在, 请重试\n");
      exit(EXIT_FAILURE);
  }
  matrixsD->row = row;
  matrixsD->col = col;

  // 根据行数和列数，将一维数组转为多维数组
  for (int i = 0; i < row; i++)
    for(int j = 0; j < col; j++) {
      matrixsD->elements[i][j] = ptr[i * col + j];
    }

}

float * initialArray(int *row, int *col, enum matrixs num){

  switch (num) {
    case arr1:
      *row = 3;
      *col = 3;
      return a1;
    case arr2:
      *row = 3;
      *col = 3;
      return a2;
    case arr3:
      *row = 2;
      *col = 3;
      return a3;
    case arr4:
      *row = 3;
      *col = 2;
      return a3;
    default:
      printf("initialArray： 所选编号不存在, 请重试\n");
      exit(EXIT_FAILURE);
  }
}

void tranformArrayToMatrixs(const float *ptr, const int *row, const int *col, float arr[3][3]) {
  for(int i = 0; i < *row; i++)
    for (int j = 0; j < *col; ++j) {
      arr[i][j] = *(ptr + i * (*col) + j);
    }
}

void writeMatrixPointerResultToFile(FILE *fp, struct Matrixs matrixs1, struct Matrixs matrixs2, struct Matrixs matrixs3) {
  fprintf(fp, "\n矩阵方法得到的结果：矩阵a1左乘矩阵a2为：\n\n");
  for (int i = 0; i< matrixs1.row; ++i)
  {
    fprintf(fp, "  |");
    for (int j = 0; j < matrixs2.col; ++j)
    {
      fprintf(fp, " %-6f",matrixs3.elements[i][j]);
    }
    fprintf(fp, "|\n");
  }
  fprintf(fp, "\n");
}

void writeMatrixArrayResultToFile(FILE *fp, int row1, int col2, float arr[][3]) {
  fprintf(fp, "\n数组方法得到的结果：矩阵a1左乘矩阵a2为：\n\n");
  for (int i = 0; i< row1; ++i)
  {
    fprintf(fp, "  |");
    for (int j = 0; j < col2; ++j)
    {
      fprintf(fp, " %-6f", arr[i][j]);
    }
    fprintf(fp, "|\n");
  }
  fprintf(fp, "\n");
}


int main() {
  enum  matrixs num1;
  enum  matrixs num2;

  int row1, col1, row2, col2;
  float *selected_ptr1;
  float *selected_ptr2;
  float arr1[3][3];
  float arr2[3][3];

  // 定义结果矩阵
  float arr3[3][3];

  // 声明三个结构变量
  struct Matrixs matrixs1;
  struct Matrixs matrixs2;
  struct Matrixs matrixs3;

  printf("请输入两个矩阵标号: (1. a1, 2. a2, 3. a3, 4. a4): ");
  scanf("%u %u", &num1, &num2);

  /*=================结构体+指针方式=======================*/
  // 根据所选编号初始化结构变量
  initialMatrix(num1, &matrixs1);

  initialMatrix(num2, &matrixs2);

  //矩阵相乘
  matrix_multi_pointer(&matrixs1, &matrixs2, &matrixs3);

  /*=================数组方式=======================*/
  // 初始化数组
  selected_ptr1 = (float *) initialArray(&row1, &col1, num1);
  selected_ptr2 = (float *) initialArray(&row2, &col2, num2);

  // 初始化矩阵
  tranformArrayToMatrixs(selected_ptr1, &row1, &col1, arr1);
  tranformArrayToMatrixs(selected_ptr2, &row2, &col2, arr2);

  matrix_multi_array(row1, col1, row2, col2, arr1, arr2, arr3);

  // 打开文件，并将结果矩阵写入文件
  FILE *fp = fopen("/Volumes/heyg/dev/Javascriptnote/learnC/ClabTask/result.txt", "w");
  if (fp == NULL) {
    fprintf(stderr, "Failed to open file.\n");
    exit(EXIT_FAILURE);
  }
  // 结构体方法结果写入文件
  writeMatrixPointerResultToFile(fp, matrixs1, matrixs2, matrixs3);

  // 数组方法结果写入文件
  writeMatrixArrayResultToFile(fp, row1, col2, arr3);

  // 写入时间戳
  time_t now = time(NULL);
  struct tm *tm_now = localtime(&now);
  char timestamp[20];
  strftime(timestamp, sizeof(timestamp), "%Y-%m-%d %H:%M:%S", tm_now);
  fprintf(fp, "%s\n", timestamp);

  // 关闭文件
  fclose(fp);

  return 0;
}
