TommyGun.prototype = Object.create(Gun.prototype); //Inherit item methods --REQUIRED--
function TommyGun(cx, cy) {
    this.width = 36
    this.height = 13
    this.sprite = TMY;
    Gun.call(this,this.sprite,cx,cy,this.width,this.height); //inherit item attributes --REQUIRED--
    this.offsetX = 27;
    this.offsetY = 22;
    this.atkDelay = 5;
    this.atkHold = true;

    this.offset = 2;

    this.maxAmmo = 20;
    this.currAmmo = this.maxAmmo;
    this.reloadSpeed = 90;
}

TommyGun.prototype.attack = function() {
    if(!this.atkCool && !this.reloading) {
        this.currAmmo--;
        if(this.currAmmo <= 0) {
            this.reloading = true;
        }
        else this.atkCool = true;

        this.offset = -this.offset;
        if(this.offset < 0) this.offset = -(Math.random(6) + 3);
        if(this.parent.facing == 1) {
            scene.entities.push(new Projectile(this.parent,this.entity.getRight() + 10, this.entity.y + this.offset, 10,10,this.parent.facing, 0));
        }
        if(this.parent.facing == -1) {
            scene.entities.push(new Projectile(this.parent, this.entity.x - 20, this.entity.y + this.offset, 10,10,this.parent.facing, 0));
        }
    }
}

Shotgun.prototype = Object.create(Gun.prototype)
function Shotgun(cx,cy) {
    this.width = 26;
    this.height = 13;
    this.sprite = DBS;
    Gun.call(this,this.sprite,cx,cy,this.width,this.height);

    this.offsetX = 32;
    this.offsetY = 22;
    this.atkDelay = 0;

    this.maxAmmo = 2;
    this.currAmmo = this.maxAmmo;
    this.reloadSpeed = 60;
}

Shotgun.prototype.attack = function() {
    if(!this.atkCool && !this.reloading) {
        this.currAmmo--;
        if(this.currAmmo <= 0) {
            this.reloading = true;
        }
        else this.atkCool = true;

        if(this.parent.facing == 1) {
            scene.entities.push(new Projectile(this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, 0, 0));
            scene.entities.push(new Projectile(this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, 0.10, 0));
            scene.entities.push(new Projectile(this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, -0.10, 0));
        }
        if(this.parent.facing == -1) {
            scene.entities.push(new Projectile(this.parent, this.entity.x - 10 , this.entity.y, 10,10,this.parent.facing, 0, 0));
            scene.entities.push(new Projectile(this.parent, this.entity.x - 10, this.entity.y, 10,10,this.parent.facing, -0.10, 0));
            scene.entities.push(new Projectile(this.parent, this.entity.x - 10, this.entity.y, 10,10,this.parent.facing, 0.10, 0));
        }
    }
}


Flamethrower.prototype = Object.create(Gun.prototype);
function Flamethrower(cx,cy) {
    this.width = 46;
    this.height = 18;
    this.sprite = FLM;
    Gun.call(this, this.sprite,cx,cy,this.width,this.height);

    this.offsetX = 32;
    this.offsetY = 22;
    this.atkDelay = 0;
    this.atkHold = true;

    this.maxAmmo = 100;
    this.currAmmo = this.maxAmmo;
    this.reloadSpeed = 120;
}

Flamethrower.prototype.attack = function() {
    if(!this.atkCool && !this.reloading) {
        this.currAmmo--;
        if(this.currAmmo <= 0) {
            this.reloading = true;
        }
        else this.atkCool = true;

        var y = Math.random() * 0.2;
        var d = Math.random() * 100;

        if( d < 50) d = 1;
        else if(d >= 50) d = -1;

        var colors = ["red", "orange"];
        var index = Math.floor(Math.random()*colors.length);

        if(this.parent.facing == 1) {
            scene.entities.push(new Projectile(this.parent,this.entity.getRight(), this.entity.y, 10,10,this.parent.facing, d * y, 20,colors[index]));
        }
        
        if(this.parent.facing == -1) {
            scene.entities.push(new Projectile(this.parent, this.entity.x - 10 , this.entity.y, 10,10,this.parent.facing, d * y, 20,colors[index]));
        }
    }
}

Lazer.prototype = Object.create(Gun.prototype);
function Lazer(cx,cy)
{
  this.width = 26;
  this.height = 13;
  this.sprite = LZG;
  Gun.call(this,this.sprite,cx,cy,this.width,this.height);

  this.offsetX = 26;
  this.offsetY = 28;
  this.atkDelay = 0;
  this.atkHold = false;

  this.maxAmmo = 10;
  this.currAmmo = this.maxAmmo;
  this.reloadSpeed = 85;
}

Lazer.prototype.attack = function()
{
  if(!this.atkCool && !this.reloading) {
      this.currAmmo--;
      if(this.currAmmo <= 0) {
          this.reloading = true;
      }
      else this.atkCool = true;

      var colors = ["green","red", "blue", "purple"];
      var index = Math.floor(Math.random()*colors.length);
      if(this.parent.facing == 1) {
          scene.entities.push(new Projectile(this.parent,this.entity.getRight(), this.entity.y, 13,5,this.parent.facing, 0, 0, colors[index]));
    }
      if(this.parent.facing == -1) {
          scene.entities.push(new Projectile(this.parent, this.entity.x - 10 , this.entity.y, 10,3,this.parent.facing, 0, 0,colors[index]));
      }
  }
}

Freeze.prototype = Object.create(Gun.prototype);
function Freeze(cx,cy)
{
  this.width = 46;
  this.height = 10;
  this.sprite = FZG;
  Gun.call(this, this.sprite,cx,cy,this.width,this.height);

  this.offsetX = 32;
  this.offsetY = 22;
  this.atkDelay = 0;
  this.atkHold = true;

  this.maxAmmo = 50;
  this.currAmmo = this.maxAmmo;
  this.reloadSpeed = 150;
}
Freeze.prototype.attack = function()
{
  if(!this.atkCool && !this.reloading) {
      this.currAmmo--;
      if(this.currAmmo <= 0) {
          this.reloading = true;
      }
      else this.atkCool = true;

      var y = Math.random() * 0.2;
      var d = Math.random() * 50;

      if( d < 50) d = 1;
      else if(d >= 100) d = -1;

      var colors = ["cyan", "white"];
      var index = Math.floor(Math.random()*colors.length);
      if(this.parent.facing == 1) {
        let fp = new Projectile(this.parent,this.entity.getRight(), this.entity.y, 10,10, 0.6, d * y, 0,colors[index],0.25);
        fp.entity.tag = "fp";
        scene.entities.push(fp);
      }
      if(this.parent.facing == -1) {
        let fp = new Projectile(this.parent, this.entity.x - 10 , this.entity.y, 10,10, -0.6, d * y, 0,colors[index],0.25);
        fp.entity.tag = "fp";
        scene.entities.push(fp);
      }
  }
}

Bazooka.prototype = Object.create(Gun.prototype); //Inherit item methods --REQUIRED--
function Bazooka(cx, cy) {
    this.width = 64
    this.height = 16
    this.sprite = BZK;
    Gun.call(this,this.sprite,cx,cy,this.width,this.height); //inherit item attributes --REQUIRED--
    this.offsetX = 12;
    this.offsetY = 15;
    this.atkDelay = 0;
    this.atkHold = false;

    this.maxAmmo = 1;
    this.currAmmo = this.maxAmmo;
    this.reloadSpeed = 170;
}

Bazooka.prototype.attack = function() {
    if(!this.atkCool && !this.reloading) {
        this.currAmmo--;
        if(this.currAmmo <= 0) {
            this.reloading = true;
        }
        else this.atkCool = true;

        if(this.parent.facing == 1) {
          scene.entities.push(new ExplosiveProjectile(this.parent,this.entity.getRight(), this.entity.y, 30,15,this.parent.facing*30, 0, 0, "red", 15));
        }
        if(this.parent.facing == -1) {
          scene.entities.push(new ExplosiveProjectile(this.parent, this.entity.x - 20 , this.entity.y, 30,15,this.parent.facing*30, 0, 0,"red", 15));
        }
    }
}