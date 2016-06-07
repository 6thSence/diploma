diploma

## JUST
``` javascript
npm run start
//or 
//{process.env} npm start
```

## process.env
``` javascript
    NODE_ENV=development  //for development
```


## format for imoprt json file in to mongoLab 
``` javascript 
mongoimport -h ds025263.mlab.com:25263 -d heroku_sr0fbvrw -c *collection* -u *user* -p *p@ssword* --file *file* --jsonArray
```