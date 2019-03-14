const gulp=require("gulp");
const sass=require("gulp-sass");
const autoprefixer=require("gulp-autoprefixer");
const concat=require("gulp-concat");
const mincss=require("gulp-clean-css");
const htmlmin=require("gulp-htmlmin");
const babel=require("gulp-babel");
const uglify=require("gulp-uglify");
const webserver=require("gulp-webserver");
const {join,extname}=require("path");
const {parse}=require("url");
const {readFileSync}=require("fs");
const data=require("./src/data/data.json");
const list=require("./src/data/list.json");

gulp.task("devCss",()=>{
    return gulp.src("./src/scss/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer({
        browsers:['last 2 versions']
    }))
    .pipe(mincss())
    .pipe(gulp.dest("./src/css"))
})

gulp.task("watch",()=>{
    gulp.watch("./src/scss/**/*.scss",gulp.series("devCss"))
})
