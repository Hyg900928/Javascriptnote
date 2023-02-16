#include <stdio.h>
#include <string.h>

/**
 * 字符串
 *
 * */

int main() {

  char site[7] = {'R', 'U', 'N', 'O', 'O', 'B'};
  char a[] = "asdfs";
  char str1[14] = "runoob";
  char str2[14] = "google";
  char str3[14];
  int  len ;
  printf("菜鸟教程: %s\n", site );
  printf("a[0】的地址: %p\n", &a[0] );
  printf("a[1] 的值: %c\n", *(&a[1]) );

  /* 复制 str1 到 str3 */
  strcpy(str3, str1);
  printf("strcpy( str3, str1) :  %s\n", str3 );

  /* 连接 str1 和 str2 */
  strcat( str1, str2);
  printf("strcat( str1, str2):   %s\n", str1 );

  /* 连接后，str1 的总长度 */
  len = strlen(str1);
  printf("strlen(str1) :  %d\n", len );

  return 0;
}
