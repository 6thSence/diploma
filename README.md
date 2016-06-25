diploma

## JUST
``` javascript
npm run start //for production
npm run dev //for development
//or 
//{process.env} npm start
//{process.env} npm dev
```

## format for imoprt json file in to mongoLab 
``` javascript 
mongoimport -h ds025263.mlab.com:25263 -d heroku_sr0fbvrw -c *collection* -u *user* -p *p@ssword* --file *file* --jsonArray
```