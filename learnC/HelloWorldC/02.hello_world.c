#include <stdio.h>

int main() {
  int  V;
  int  *Pt1;
  int  **Pt2;

  V = 100;

  /* 获取 V 的地址 */
  Pt1 = &V;

  /* 使用运算符 & 获取 Pt1 的地址 */
  Pt2 = &Pt1;

  /* 使用 pptr 获取值 */
  printf("var = %d\n", V );
  printf("Pt1 = %p\n", Pt1 );
  printf("*Pt1 = %d\n", *Pt1 );
  printf("Pt2 = %p\n", Pt2 );
  printf("**Pt2 = %d\n", **Pt2);
  return 0;
}
