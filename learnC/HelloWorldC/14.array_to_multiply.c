#include <stdio.h>

#define ROW 3
#define COL 2

int main() {
  int arr1D[] = {1, 2, 3, 4, 5, 6};
  int arr2D[ROW][COL];
  int i, j;
  //一维维整型数组转换为二维整型数组
  for (i = 0; i < ROW; i++) {
    for (j = 0; j < 2; j++) {
      arr2D[i][j] = arr1D[i * COL + j];
    }
  }
  //二维整型数组打印显示
  for (i = 0; i < ROW; i++) {
    for (j = 0; j < COL; j++) {
      printf("%d  ", arr2D[i][j]);
    }
    printf("\n");
  }
  return 0;
}
