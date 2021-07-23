 # ssh -i "seongmin-webpc.pem" ubuntu@ec2-18-117-151-106.us-east-2.compute.amazonaws.com

 # nginx

 sudo apt-get install nginx
 도중에 [y/n] 나오면 y 눌러주세요

 nginx.conf : 설정파일
sites-availabel : (폴더)
sites-enabled : (폴더)

sites-availabel > 설정파일 만들고
sites-enabled > 바로가기 셋팅하게

nginx 실행

vi 많이 쓸거임

cp 명령어
copy
mv
move

sudo vi myapp.conf


server{
    listen 80; // 포트실행번호
    location / { // uri 값
        root /home/ubuntu/www //내가 실행시킬 파일 경로
        index index.html index.htm; //내가 실행시킬 파일명
        try_files $uri /index.html; //http://localhost:3000/about

    }
}

ln -s [기존디렉토리] [바로가기만들디렉토리]

sudo nginx -t

/etc/nginx

cd sites-enabled

sudo rm myapp.conf

sudo ln -s /etc/nginx/sites-available/myapp.conf /etc/nginx/sites-enabled/myapp.conf

/etc/nginx
sudo nginx -t

sudo systemctl start nginx
sudo systemctl stop nginx

www 안에 들어가서 index.html을 만들겁니다

ps -ef | grep nginx


mv
cp
ln
vi
cd
ls -al
ps -ef | grep [찾을프로세스명]
kill -p [pid]
pwd

폴더구조

도메인 연결
ingoos.com 대여 1년 3년
가비아
후이즈


money 13500

백앤드 프론트서버 나눠서 계속 진행하게될 경우
도메인 어느정도 필수

login 새로고침하면 로그인이 풀림

npx webpack




















