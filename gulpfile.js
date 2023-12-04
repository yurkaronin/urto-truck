const gulp = require('gulp');
const fileInclude = require('gulp-file-include');

// Задача для обработки HTML-файлов
gulp.task('html', function() {
  return gulp.src('src/pages/*.html') // Выбираем все HTML файлы в папке src/pages
      .pipe(fileInclude({
          prefix: '@@', // Префикс для директив включения файлов
          basepath: '@root' // Основной путь к включаемым файлам относительно корня проекта
      }))
      .pipe(gulp.dest('./')); // Сохраняем результаты в корень проекта
});

// Задача для автоматического отслеживания изменений
gulp.task('watch', function() {
    gulp.watch('src/**/*.html', gulp.series('html'));
    // Здесь можно добавить другие пути и задачи, если нужно следить за изменениями в CSS или JS
});

// Задача по умолчанию, которая выполняет задачи 'html' и 'watch'
gulp.task('default', gulp.series('html', 'watch'));
