
document.write = new Function();
var q1="font-size: 83%",r1="Import Atom Notebook (*.xml) ",s1="input-file",t1="submit",u1="Import",v1="margin-left: 20px",w1="form",x1="multipart/form-data",y1="import-post",z1="post",A1="import_target",B1="import",C1="display:none;width=0;height=0",D1=function(){var a=N(bE,{style:q1},r1),b=N(zE,{name:s1,type:Vd,size:50}),c=N(zE,{type:t1,value:u1,style:v1}),e=N(w1,{enctype:x1,encoding:x1,id:y1,method:z1,target:A1,action:B1},a,b,c),f=N(ND,{name:A1,id:A1,src:tf,style:C1}),g=N(P,h,e,f);di(g,RF);return g},
E1="/<wbr></wbr>";function F1(a){return a[t](/\/(?!\/)/g,E1)}var G1=function(a){ho[y](this,a);this.pl(j);this.KD()};G1.t(ho);G1.Hb(QB[p]);G1[p].S=function(){this.dl();G1.b.S[y](this)};G1[p].ca=function(a,b){switch(a){case Qp:this.gj();break;case Tp:case Aq:this.Lu(b);break;case yq:this.QL(b);break;case Dq:if(b==Lq){this.KD();this.gj()}break}};G1[p].tl=function(){this.JL();T.io(Rz);R.aa.et();this.hc(R.G)};G1[p].Tc=function(){this.Ze();this.hj(R.G)};var H1="ng",I1="IE",J1="og";G1[p].M=function(){var a=
N(P);this.yc(a,ml(RF));var b=N(P,{className:[H1,RF][D](H)});l(b,aK);O(a,b);this.nN();O(a,this.kr);if(Cg.Jc(I1)){var c=D1();L(c,J1,RF);O(a,c)}this.yc(a,nl(RF));this.Sa(a);return a};var K1="lg";G1[p].nN=function(){this.kr=N(P,{className:[K1,VF,WF][D](H)});this.Qk(this.kr)};G1[p].JL=function(){var a=R.G.Xo();for(var b=0;b<a[o];b++){var c=a[b];if(c.Xb())continue;this.Re(this.CA(c))}};G1[p].CA=function(a){var b;b=a.Wc()?new L1(this.n,a,this):new M1(this.n,a,this);return b};G1[p].QL=function(a){var b=this.CA(a);
this.Re(b);this.kr&&O(this.kr,b.M());this.gj()};G1[p].KD=function(){this.Ol(oq[R.G.Xg(Lq)])};T.Hd(Rz,G1);var N1=function(a,b,c){ho[y](this,a);this.ah(b,c);this.sI=this.qB();this.jy={};this.jy[this.sI]=this.SP};N1.t(ho);N1.Hb(PB[p]);N1[p].ca=function(){this.R()};N1[p].S=function(){this.cl();N1.b.S[y](this)};var O1="sg",P1="ug",Q1='" target="_blank">view</a>)',R1='<div class="k"><table><tr>',S1="</tr></table></div>",T1="<table><tr>",U1='<td valign="top" width="15px">',V1='<td><span tabindex=0 id="',W1='" class="',X1="rg",Y1="</span><br>",Z1='<span class="',$1="qg",a2="</span></td>";N1[p].M=function(){var a=
N(P),b=[O1,WF];this==this.O.Te()&&b[m](P1);ta(a,b[D](H));var c=[],e=this.Y();e.Tr&&c[m](gH+ym(e.Tr));e.dh()&&c[m](KA+(cG+R.Tt(e)+Q1));var f=new kj;f.U(R1,this.rB(),S1,T1,U1,R.kv(e,d),CC,V1,this.sI,W1,X1,bj,jf(e.J),Y1,Z1,$1,bj,c[D](eD),a2,S1);l(a,f[Va]());this.Sa(a);return a};var b2='<td id="',c2=' class="',d2="pg",e2=' title="',f2=" tabindex=0>";N1[p].Pi=function(a,b,c){var e=this.qB(a);this.jy[e]=b;return(new kj(b2,e,cf,c2,d2,cf,c?e2+c+cf:G,f2,a,CC))[Va]()};N1[p].qB=function(){return this.k()};N1[p].Y=
function(){return this.L};N1[p].Ba=function(a){var b=this.jy[a.pa];b&&b[y](this)};N1[p].SP=function(){R.pc(this.Y())};N1[p].bB=function(){T.nC(this.Y())};var L1=function(a,b,c){N1[y](this,a,b,c);b.Wc()||void 0};L1.t(N1);var g2="export",h2="rename",i2="Send this notebook to the Trash";L1[p].rB=function(){var a=new kj;a.U(this.Pi(g2,this.bB),this.Pi(ev,this.yS),this.Pi(h2,this.pR),this.Pi(rD,this.KN,i2));return a[Va]()};var j2="What would you like to call this notebook?";L1[p].pR=function(){var a=this.Y(),b=a.J,c=prompt(j2,b);c!=h&&c!=b&&!Ke(c)&&S.Fp(a,c,function(e){a.Zi(e.J);a.ge(e.Ka);a.xD(e.Vl)},Sr(VE),this)};L1[p].KN=function(){R.jj(this.Y())};L1[p].yS=
function(){T.qC(this.Y())};var M1=function(a,b,c){N1[y](this,a,b,c);b.Wc()&&void 0};M1.t(N1);var k2="remove";M1[p].rB=function(){return this.Pi(g2,this.bB)+this.Pi(k2,this.iR)};var l2="The notebook has been removed.",m2="Unable to remove shared notebook.";M1[p].iR=function(){var a=this.Y();S.Cl(a,function(){R.G.gp(a);R.Yo(l2,this.aM,this)},Sr(m2),this)};M1[p].aM=function(){S.ao(this.Y(),function(){R.G.bh(this.Y())},Sr(FF),this)};var n2=function(a){ho[y](this,a);this.kg=this.k();this.zh={};for(var b in pr)this.zh[pr[b]]=this.k();this.Vw=Yh(this.zh)};n2.t(ho);var o2=": export options";n2[p].FO=function(){return jf(this.ea.J)+o2};var p2='<tr><td colspan="2">',q2='<div class="',r2="yg",s2='"></div>',t2='<tr valign="top"><td width="5%">',u2="fa",v2='</td><td width="65%">';n2[p].iM=function(a,b){var c=sr[b];Br(b,this.ea);a.U(p2,q2,r2,s2,OC);a.U(t2);a.U(fG,this.zh[b],W1,u2,bj,c,BA);a.U(v2);a.U(ur[b]);a.U(OC)};var w2="<table>",x2=
'<col width="0"></col>',y2='<col width="60"></col>',z2="gd lg hd",A2="bh",B2='" ',C2='class="',D2="vg",E2='" tabindex=0>',F2="&laquo; ",G2="Back",H2="</span> &nbsp; ";n2[p].M=function(){var a=N(P);this.yc(a,ml(RF));di(a,RF);var b=N(P,{className:[H1,RF][D](H)});l(b,this.FO());O(a,b);var c=wr(this.ea),e=new kj;e.U(w2,x2,y2);for(var f=0;f<c[o];f++){var g=c[f];g!=nr&&g!=og&&g!=zf&&this.iM(e,g)}e.U(IC);var i=N(P,{"class":z2});l(i,e[Va]());O(a,i);var n=(new kj(q2,A2,H,RF,H,WF,bj,Td,this.kg,B2,C2,D2,E2,
F2,G2,H2))[Va]();this.yc(a,n);this.yc(a,nl(RF));this.Sa(a);return a};n2[p].OP=function(a){this.ea=a;T.io(Oz)};n2[p].Ba=function(a){var b=a.pa,c=this.Vw[b];if(b==this.kg){this.Ho();return 0}else if(c){this.$N(c);return 0}};n2[p].Ho=function(){switch(T.gy){case Rz:T.tl();break;case uf:R.pc(this.ea);break;default:}};n2[p].$N=function(a){this.n[ab](Gr(a,this.ea,S.ec),yI)};T.Hd(Oz,n2);var I2=function(a){ho[y](this,a);this.zf=this.k();this.eJ=this.k();this.DJ=this.k();this.Ty=this.k();this.Dd=this.k();this.kg=this.k();this.ea=h};I2.t(ho);var J2="dh fd",K2="xg hd gd",L2="If you do not wish to use this notebook anymore, you may remove it from your notebook list.<br>(This will not delete the owner's original notebook)",M2="<button id='",N2="Remove this notebook",O2="</button>",P2="<br><div class='",Q2="'></div><br>",R2="<table><tr valign='top'>",S2="Address of the web page:",T2="<td width='5%'></td>",
U2="This notebook is published on the web, at the following address. Anyone who knows this address can read the notebook.",V2="bh fd",W2="' tabindex=0>";I2[p].M=function(){var a=N(P);l(a,[ml(RF),DC,this.zf,vA,J2,Q,am,Ql,K2,Q,DC,this.eJ,Sl,Ud,L2,Zd,M2,this.DJ,Q,N2,O2,DC,this.Ty,Q,P2,r2,Q2,R2,pC,S2,CC,T2,pC,Ud,U2,Zd,DC,this.Dd,Q2,CC,Gj,am,am,Ql,V2,Q,KC,this.kg,Vl,wj,D2,W2,F2,G2,H2,am,nl(RF)][D](G));this.Sa(a);return a};I2[p].R=function(){this.ea&&this.Cv(this.ea)};var X2=": sharing options",Y2="The notebook is owned by ",
Z2="\" target='_blank'>";I2[p].Cv=function(a){l(M(this.zf),jf(a.J)+X2);l(M(this.eJ),Y2+jf(a.rn));if(a.dh()){Ma(M(this.Ty)[w],jI);var b=R.Tt(a);l(M(this.Dd),[cG,jf(b),Z2,F1(jf(b)),fm][D](G))}else Ma(M(this.Ty)[w],xk)};I2[p].Ba=function(a){var b=a.pa;if(b==this.DJ)this.gp(this.ea);else b==this.kg&&this.oo(this.ea)};I2[p].Uo=function(a){this.ea=a;T.io(Qz);this.R()};var $2='Are you sure you want to remove shared notebook "',a3='" from your notebook list?';I2[p].gp=function(a){if(ha($2+(a.J+a3))){var b=
R;S.Cl(a,function(){b.G.gp(a);b.tv()},Sr(m2),this)}};I2[p].oo=function(a){R.pc(a)};T.Hd(Qz,I2);var c3=function(a){ho[y](this,a);this.zf=this.k();this.ZK=this.k();this.kg=this.k();this.SJ=this.k();this.$E=this.k();this.Zh=this.k();this.DK=this.k();this.BK=this.k();this.CK=this.k();this.uq=this.k()+jo;this.Rs=this.k()+jo;this.Ef=this.k();this.as=this.k();this.vn=this.k();this.oJ=this.k();this.lI=this.k();this.Tn=this.k();this.pJ=this.k();this.Dd=this.k();this.ea=h;this.iz=d;this.Bs=h;this.Cy=d;this.Bd=new b3($r());this.$h=[];this.wn=[];this.Ww=G;this.iH=d;this.jH=j;this.Bx=d};c3.t(ho);var d3=
"<tr valign='top'><td width='45%'>",e3="</td><td width='5%'>",f3="</td><td width='45%'>",g3="<tr class='",h3="zg",i3="'><td colspan='3'>",j3="<tr><td colspan='3'>",k3="ch",l3="ah",m3="/notebook/images/",n3="icon_shared_orange.gif",o3="Tip: this icon will appear next to a shared notebook.",p3="Invite Collaborators:",q3="Collaborators may view and edit this notebook. If you add someone who does not have a Google account, we'll help them set one up.",r3="Separate email addresses with commas.",s3="' rows='4' cols='40'>",
t3="Publish this notebook (make a public web page)",u3="name='pub' value='0'>",v3="<label for='",w3="No",x3="</label>",y3="name='pub' value='1'>",z3="Yes...",A3="'></div><br><br>",B3="Invite people to view it:",C3="</textarea><br><br>",D3="Author's name (appears on all of your published notebooks)",E3='<div id="',F3="Important",G3="When publishing a notebook that contains content from websites, please remember to respect the hard work (and legal rights) of the people that created the content. Publishing a notebook is the same as creating your own web page &#8212; don't include content in your notebook that you couldn't legally publish on your own webpage. For more information on our program policies, ",
H3="' target='_blank'>click here</a>.",I3="</div><br/>",J3="<input type='checkbox' id='",K3="Use thumbnailed images in the published notebook",L3="</label><br/><br/>",M3="</table></div>",N3="Save Settings";c3[p].M=function(){var a=N(P),b=[d3][D](G),c=[e3,f3][D](G),e=OC,f=[g3,h3,i3,Ql,r2,Sl,OC][D](G);l(a,[ml(RF),DC,this.zf,vA,J2,Q,am,Ql,K2,Q,w2,j3,DC,this.ZK,Vl,wj,k3,Q,am,Ql,l3,Q,RA,m3,n3,TA,XC,o3,am,e,f,b,Ql,k3,Q,p3,am,Ud,q3,Zd,Ql,l3,Q,r3,am,$d,this.Zh,s3,ae,c,DC,this.DK,Q,DC,this.BK,Vl,wj,k3,Q,am,
this.LQ(),DC,this.CK,Q,am,am,e,f,b,Ql,k3,Q,t3,am,Ud,ce,this.as,Vl,u3,v3,this.as,Q,w3,x3,qF,ce,this.Ef,Vl,y3,v3,this.Ef,Q,z3,x3,Zd,DC,this.oJ,Q,S2,DC,this.Dd,A3,Ud,B3,am,Ql,l3,Q,r3,am,$d,this.vn,s3,C3,Ud,D3,am,E3,this.lI,s2,am,c,DC,this.pJ,Q,Ql,k3,Q,F3,am,Ud,G3+(LA+bl+H3),I3,J3,this.Tn,Q,v3,this.Tn,Q,K3,L3,am,e,M3,Ql,V2,Q,KC,this.kg,Vl,wj,D2,W2,F2,G2,H2,M2,this.SJ,Q,N3,O2,iB,M2,this.$E,Q,HE,O2,am,nl(RF)][D](G));this.Sa(a);return a};c3[p].R=function(){if(this.ea&&this.Bs){this.Cv(this.ea,this.Bs);M(this.Zh)[Dc]()}};
var O3="This notebook is currently shared.",P3="This notebook is not currently shared.";c3[p].Cv=function(a,b){var c=jf(a.J);l(M(this.zf),c+X2);l(M(this.ZK),a.ju()?O3:P3);xa(M(this.Zh),G);Ma(M(this.DK)[w],a.iC()?G:xk);this.eT(b.Bd);var e=this.iH=b.pr;va(M(this.Ef),e);va(M(this.as),!e);this.mE(e);va(M(this.Tn),this.jH=!e||b.Nk);this.fT(b);xa(M(this.vn),G)};c3[p].mE=function(a){var b=a?G:xk;Ma(M(this.oJ)[w],b);Ma(M(this.pJ)[w],b);if(a&&!this.mJ){this.mJ=j;this.TP(Ee(this.BS,this))}};c3[p].fT=function(a){var b=
this.rO(a),c=F1(jf(b));l(M(this.Dd),[cG,jf(b),Z2,c,fm][D](G))};c3[p].eT=function(a){this.Bx=d;this.Bd.dR();this.oE(a[o]);var b=[];for(var c=0;c<a[o];++c){b[m](this.tQ(c,jf(Q3(a[c]))));this.Bd.fM(a[c])}l(M(this.CK),b[D](G))};var R3="Collaborators (";c3[p].oE=function(a){l(M(this.BK),R3+(a+1+Pg))};c3[p].QD=function(a,b,c){return[gm,a?FC+a+$f:G,bf,b,Yj,c,am][D](G)};var S3="owner";c3[p].LQ=function(){return this.QD(h,jf($r()),S3)};c3[p].tQ=function(a,b){return this.QD(this.uq+a,b,[KC,this.Rs,a,Vl,wj,
D2,W2,Yd,BA][D](G))};c3[p].Ba=function(a){var b=a.pa,c=Fl(b,this.Rs);b==this.kg&&this.Cp();if(b==this.SJ)this.XR();else if(b==this.$E)this.oo();else if(b==this.Ef||b==this.as)this.mE(M(this.Ef)[mb]);else if(c){a[Tb]();this.lR(c.Ik)}return 0};c3[p].Ge=function(a){a[z]==27&&this.Cp()};var T3="Unable to save sharing options.";c3[p].Uo=function(a){if(T.Rf()){this.iz=d;S.Yt(a,T.Rg(function(b){this.ea=a;this.Bs=b;this.Cy=d;T.dg(Pz);this.mJ=d;this.yP();this.R()},this),Sr(T3),this)}};c3[p].Ho=function(){switch(T.gy){case Rz:T.tl();
break;case uf:R.pc(this.ea);break;default:}};var U3="FCS";c3[p].BS=function(){this.n.addProfileEditor(this.lI,Cg.El(U3),{hl:Ef})};c3[p].XR=function(){this.MQ()&&this.NQ()&&this.QR()};c3[p].QR=function(){if(this.$h[o]||this.wn[o]){var a=[];for(var b=0;b<this.$h[o];++b)a[m](this.$h[b].XA());_GN_dialogs.zb(function(){(new Hm(this.n,a[Lb](this.wn))).Xc(function(c){if(c!=h){this.Ww=c;this.sD()}},this)},this)}else this.sD()};var V3="Google Notebook was unable to send email to the following:\n\n";c3[p].sD=
function(){var a=this.ea,b=this.Bs;b.gS(M(this.Ef)[mb]);b.iv(M(this.Tn)[mb]);b.sS(this.Bd.wO()[Lb](this.$h));S.Gv(a,b,this.$h,this.Ww,this.wn,this.Ww,function(c){if(c&&c[o]){var e=V3+c[D](Le);na(e)}a.HD(b.pr?b.di:G);a.iv(b.Nk);a.kS(b.Bd[o]);this.iz=j;this.Ho()},Sr(T3),this)};c3[p].Cp=function(){this.kA()&&this.oo()};c3[p].oo=function(){this.Cy=j;this.Ho()};var W3="Some of the sharing options have been changed. Please save or cancel your change before leaving the page.";c3[p].kA=function(){if(!this.Cy&&
this.vP()){na(W3);return d}else return j};c3[p].vP=function(){return!this.iz&&ba(M(this.Ef)[mb]!=this.iH||M(this.Ef)[mb]&&(M(this.Tn)[mb]!=this.jH||!Ke(M(this.vn)[Rb]))||!Ke(M(this.Zh)[Rb])||this.Bx)};c3[p].yP=function(){_GN_ac.zb(function(){if(this.D()){if(this.Na)this.Na.Tv(M(this.Zh));else{this.Na=new Fm(X3()+gp,Tq);this.Na.rK(Ef);this.Na.FE(M(this.Zh))}this.Na.Tv(M(this.vn))}},this)};c3[p].rO=function(a){return R.FB(UA+a.di)};c3[p].MQ=function(){this.$h=[];return this.RC(this.Zh,this.iQ)};c3[p].iQ=
function(a,b){var c=new Xr(G,a);this.Bd.OM(c)?b[m](a):this.$h[m](c)};c3[p].NQ=function(){this.wn=[];return!M(this.Ef)[mb]||this.RC(this.vn,this.TQ)};c3[p].TQ=function(a){this.wn[m](a)};var Y3="These don't seem like valid email addresses:\n",Z3="\n\n";c3[p].RC=function(a,b){var c=M(a),e=zK(c[Rb]),f=[],g=[];for(var i=0;i<e[o];++i){var n=e[i];Ke(n)||(vK(n)?b[y](this,n,g):f[m](n))}var q=[];f[o]&&q[m](Y3+f[D](Le));if(q[o]){na(q[D](Z3));c[Dc]();return d}else return j};c3[p].lR=function(a){this.Bx=j;this.Bd.cR(a);
Fi(M(this.uq+a));for(var b=ea(a,0);b<this.Bd.kc[o];++b){M(this.uq+(b+1)).id=this.uq+b;M(this.Rs+(b+1)).id=this.Rs+b}this.oE(this.Bd.kc[o])};var $3=") ",Q3=function(a){var b=a.Bm,c=a.Tm;return b&&c?b+ZB+c+$3:b||c},b3=function(a){this.kc=[];this.sq={};this.Ib=a;this.wi(this.Ib,1)};b3[p].Jc=function(a){return this.kc[a]};b3[p].wO=function(){return Eh(this.kc)};b3[p].OM=function(a){return ba(this.tA(a.Bm)||this.tA(a.Tm))};b3[p].fM=function(a){this.kc[m](a);this.KL(a)};b3[p].cR=function(a){this.fR(this.kc[a]);
this.kc[vd](a,1)};b3[p].dR=function(){this.kc=[];this.sq={};this.wi(this.Ib,1)};b3[p].KL=function(a){this.wi(a.Bm,1);this.wi(a.Tm,1)};b3[p].fR=function(a){this.wi(a.Bm,-1);this.wi(a.Tm,-1)};b3[p].wi=function(a,b){if(a)this.sq[a]=(this.sq[a]||0)+b};b3[p].tA=function(a){return a&&this.sq[a]||0};var a4="text/javascript",b4="/s2/ui/ProfileLauncher/dommanifest.js";c3[p].TP=function(a){var b=this.n;if(b.addProfileEditor){a();return}var c=N(fj,{type:a4,src:b4});b.manifest={serverBase:X3()};var e=0,f=b[Mb](function(){if(b.addProfileEditor){b[Xc](f);
a()}else e++==600&&b[Xc](f)},50);O(this.n[vb][Gd],c)};var c4="/s2",d4="/notebook/a/c/",X3=function(){var a=c4;if(Cg.Jc(cr))a=d4+Cg.Jc(cr);return a};T.Hd(Pz,c3);var e4="Empty note",f4="Your trash is empty!",g4=function(a){ho[y](this,a);this.gn=new tG(e4,a[vb]);this.py=50;this.ok=h;this.Oe=h;this.Qs=f4;this.od=G;this.Ds=d;this.Nd=h;this.AF=this.k();this.NJ=this.k();this.vI=this.k();this.Ew=this.k();this.kw=this.k();this.kF=this.k();this.nI=this.k();this.LE=this.k();this.Kh={};this.Kh[this.AF]=this.xQ;this.Kh[this.NJ]=this.AQ;this.Kh[this.vI]=this.zQ;this.Kh[this.Ew]=this.wQ;this.Kh[this.kw]=this.PS};g4.t(ho);var h4="jh",i4="kh",j4="'><div class='",k4="lh",
l4="mh";g4[p].M=function(){var a=N(P);L(a,h4);var b=[Ud,ml(RF),am,Ql,RF,H,i4,j4,k4,Q,ZJ,this.od!=G?Yj+jf(this.Ee):G,II,Ql,l4,H,WF,Q,this.Qs,am,Ud,nl(RF),am];l(a,b[D](G));this.Sa(a);return a};g4[p].Ba=function(a){var b=a.pa;this.eu(b)&&a[Tb]();if(b==this.LE){this.od=G;this.il();a[Tb]()}};g4[p].pB=function(a){R.aa.et();this.ok=a.zm;this.od=G;this.Oe={};this.oB();this.R()};g4[p].eu=function(a){var b;for(var c in this.Kh){b=Fl(a,c);if(b){this.Kh[c][y](this,b.Ik);return j}}return d};g4[p].PB=function(a){return function(){this.kD(a);
this.mD();this.il()}};var m4="Your notebook has been restored with just this note.";g4[p].AR=function(a,b){var c=function(e){var f=this.Nd;this.vA();this.kD(e.e);for(var g=0;g<f[o];++g)if(f[g].e!=a){this.ok[m](f[g]);this.Oe[f[g].e]=f[g]}this.mD();this.il();R.G.bh(e);R.Yb(m4)};S.Pu(b.fa(),a,c,Sr(GB),this)};g4[p].AQ=function(a){var b=this.Oe[a];if(b)if(b.Vc())if(this.Ds)this.AR(a,b);else{var c=this.PB(a);S.kp([b],h,c,Sr(GB),this)}else S.lp(a,function(e){R.G.bh(e);S.Oi(function(f){this.pB(f)},Sr(Nz),
this)},Sr(xB),this)};g4[p].xQ=function(a){var b=this.Oe[a];if(b){var c=this.PB(a);b.Vc()?S.al(b.fa(),a,c,Sr(kD),this):S.yt(a,c,Sr(yB),this)}};g4[p].vA=function(){var a=this.Nd;if(a)for(var b=0;b<a[o];++b)delete this.Oe[a[b].e];this.Nd=h;this.Ds=d};g4[p].zQ=function(a){this.od=a;this.vA();this.il()};g4[p].wQ=function(a){this.od=a;this.Ds=yp(a);S.ru(a,function(b){var c=b.zm;this.Nd=c;for(var e=0;e<c[o];++e){var f=c[e];this.Oe[f.e]=f}this.il()},Sr(Nz),this)};g4[p].PS=function(a){var b=M(this.kF+a),c=
!b.yV;b.yV=c;var e=[];e[m](this.gn.kt(!c,d,this.kw+a));l(b,e[D](G));var f=this.Oe[a],g=M(this.nI+a),i=c?this.gn.EC(f.fb()):this.gn.jt(f.fb());l(g,[Ql,XG,Q,i,am][D](G))};g4[p].il=function(){this.od==G?this.oB():this.vO();this.R()};g4[p].mD=function(){var a=this.od;if(a==G)return;var b=this.ok;if(this.Nd)b=this.Nd;var c=d;for(var e=0;e<b[o];++e)if(b[e].fa()==a){c=j;break}if(!c){this.od=G;this.Nd=h;this.Ds=d}};g4[p].kD=function(a){var b=this.ok;if(this.Nd)b=this.Nd;for(var c=0;c<b[o];++c)if(b[c].Vc()?
b[c].e==a:b[c].fa()==a){b[vd](c,1);return}};var n4="<table class=vh><tr><td>Your trash is empty!</td></tr></table>",o4="Notebooks with deleted notes",p4="<td><div class=oh></td>",q4="Deleted Notebooks",r4="<table class='vh r' style='font-size:83%'><tr><td>Click on a notebook to see deleted notes. Items in the trash will be permanently deleted after 30 days.</td></tr></table><table class='vh r' style='font-size:83%;'><tr>";g4[p].oB=function(){var a=this.ok,b=a[o];if(b<1){this.Qs=n4;return}var c=[],
e={},f=[];for(var g=0;g<b;++g){var i=a[g];if(i.Vc()){this.Oe[i.e]=i;var n=i.Ee;if(!e[n]){e[n]=1;this.nB(n,i.fa(),c)}}else if(yp(i.fa())){this.Oe[i.fa()]=i;this.sO(i.Ee,i.fa(),f)}else{this.Oe[i.fa()]=i;this.nB(i.Ee,i.fa(),c)}}var q=G;if(c[o]>0)q=this.tE(o4,c[D](G))+p4;var s=G;if(f[o]>0)s=this.tE(q4,f[D](G));this.Qs=r4+q+s+Gj};var s4="<td><div class=zh>",t4="</div><br><table style='table-layout:fixed'>",u4="</table></td>";g4[p].tE=function(a,b){return s4+a+t4+b+u4};var v4="<tr><td class='v'><div id='",
w4="wh",x4="</div></td></tr>";g4[p].nB=function(a,b,c){c[m](v4,yp(b)?this.vI:this.Ew,b,vA,w4,W2,jf(a),x4)};var y4="yh",z4="</div></td><td class='",A4="th";g4[p].sO=function(a,b,c){c[m](v4,this.Ew,b,vA,y4,W2,jf(a),z4,A4,Q);this.ZC(b,c);c[m](OC)};var B4="<div class=rh><div id=",C4=" class=wh><b>&laquo; Back</b></div></div><br><table cellpadding=0 cellspacing=0 class='vh uh u'>";g4[p].vO=function(){var a=this.od,b=G,c=this.ok;for(var e=0;e<c[o];++e)if(c[e].fa()==a){b=c[e].Ee;break}if(this.Nd)c=this.Nd;
var f=[];for(var e=0;e<c[o];++e)c[e].fa()==a&&this.uO(c[e],f);this.Ee=b;this.Qs=B4+this.LE+C4+f[D](G)+IC};var D4="<div><a class='",E4="' href=\"",F4="</a></div>",G4="ph",H4="'><td id='",I4="sh",J4="</td><td>",K4="<div id=",L4="<td class='";g4[p].uO=function(a,b){var c=G;if(a.Bc[o]>0){var e=a.Zt(0),f=a.Qt(0);c=[Ql,qg,Q,jf(e),am,D4,aH,E4,jf(f),bj,jf(qm(f,this.py)),F4][D](G)}b[m](g3,G4,H4,this.kF,a.e,vA,I4,W2,this.gn.kt(j,d,this.kw+a.e),J4,c,K4,this.nI,a.e,Ul,pg,Q,Ql,XG,Q,this.gn.jt(a.fb()),am,be,L4,
A4,Q);this.ZC(a.e,b);b[m](OC)};var M4="xh",N4="Restore",O4="</span> &nbsp; <span class=",P4="Delete forever";g4[p].ZC=function(a,b){b[m](jF,M4,FC,this.NJ+a,W2,N4,O4,M4,FC,this.AF+a,W2,P4,BA)};T.Hd(Fs,g4);var Q4=function(a){ho[y](this,a);this.EH=this.k();this.FJ=this.k();this.EJ=this.k()};Q4.t(ho);Q4[p].Uo=function(){T.io(Mz)};var R4="(1 note)",S4="sg gd",T4="<div class='k'><table><tr>",U4="</td><td width=15px></td>",V4="</td></tr></table></div>",W4="<div><span tabindex=0 id='",X4="ng fd",Y4="lg hd gd",Z4="tg",$4="<b>Note:</b> Removing a label will not delete the notes with that label.";Q4[p].M=function(){var a=N(P),b=[],c=R.G.de();for(var e=0;e<c[o];e++){var f=c[e],g=f.Tg(),i=g==1?R4:Ng+(g+de);b[m](Ql,
S4,Q,T4,uA,this.FJ+e,vA,d2,W2,h2,U4,uA,this.EJ+e,vA,d2,W2,k2,V4,W4,this.EH+e,vA,X1,Q,jf(f.J),Y1,Yl,$1,Q,i,ee,am)}l(a,[ml(RF),DC,this.zf,vA,X4,Q,NF,am,Ql,Y4,Q,b[D](G),Ql,Z4,Q,$4,am,am,nl(RF)][D](G));this.Sa(a);return a};Q4[p].Ba=function(a){var b=a.pa,c=[this.EH,this.FJ,this.EJ],e=[this.$P,this.qR,this.nR],f;for(var g=0;g<c[o];g++)if(f=Fl(b,c[g])){var i=R.G.de()[f.Ik];i&&e[g][y](this,i)}};Q4[p].$P=function(a){T.Ni(a)};var a5="What would you like to call this label?",b5="Unable to rename label.";Q4[p].qR=
function(a){var b=a.J,c=prompt(a5,b);if(c!=h){c=Ne(c);if(c!=b){var e=Co(c);if(e==h){var f=a.Tg();S.ip(c,b,function(g){R.Yb(G);var i=new Eo(wo);i.dj(b,-f);i.dj(g,f);R.G.Qg(i);this.R()},Sr(b5),this)}else R.Yb(e)}}};var c5='Remove the label "',d5='" from 1 note and delete the label?',e5='" from ',f5=" notes and delete the label?",g5="Unable to remove label.";Q4[p].nR=function(a){var b=a.J,c=a.Tg();ha(c==1?c5+(b+d5):c5+(b+(e5+(c+f5))))&&S.ip(h,b,function(){var e=new Eo(wo);e.dj(b,-c);R.G.Qg(e);this.R()},
Sr(g5),this)};T.Hd(Mz,Q4);
_GN_loaded();

