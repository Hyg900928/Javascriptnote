#                                               -*- Autoconf -*-
# Process this file with autoconf to produce a configure script.

AC_PREREQ([2.69])
AC_INIT(matrix_multi.a, 1.0, heyg@cunxin.com)
AM_INIT_AUTOMAKE
AC_CONFIG_SRCDIR([main.c])
AC_CONFIG_HEADERS([config.h])

# Checks for programs.
AC_PROG_CC

# Checks for libraries.

# Checks for header files.
AC_CHECK_HEADERS([stdio.h stdlib.h string.h time.h ])
# Checks for typedefs, structures, and compiler characteristics.

# Checks for library functions.
AC_FUNC_MALLOC
AC_FUNC_MKTIME
AC_CHECK_FUNCS([gettimeofday localtime_r])

AC_CONFIG_FILES([Makefile])
AC_OUTPUT

