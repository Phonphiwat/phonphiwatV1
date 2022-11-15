# ศึกษาgit ครั้งแรก
https://github.com/Phonphiwat/phonphiwatV1.git
----------------------------------------------------------------------------------------
echo "# phonphiwatV1" >> README.md
git init
git add . เพิ่มทั้งหมด
git add <file name> เพิ่มที่ละชื่อ
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Phonphiwat/phonphiwatV1.git
git push -u origin main
----------------------------------------------------------------------------------------
git remote add origin https://github.com/Phonphiwat/phonphiwatV1.git
git branch -M main
git push -u origin main
-------------------------------------------------------------------------------------------
git rm -r --cached . => ลบทั้งหทด
git rm -- cached <file name> => ลบแบบระบุไฟล์
git reset <file name>
git reset --hard <รหัส ตัวที่จะย้อนกลับไปใช้ แล้วลบไฟล์ก่อนหน้า>
git status 
git show HEAD <file name>

git log
git log --graph
git log --oneline
git diff <รห้สไฟล์> เปรียบเทียบ

git branch => เช็ครายชื่อ branch ที่มี
git checkout <ชื่อ branch ที่จะย้ายไปใช้>
git checkout -b <ชื่อbranchที่จะสร้าง>
git branch -d <ลบ branch >

git merge <flie name> รวม branch เข้าด้วยกัน