
class Factura {
    prodadds: IProdadds[];
    subtotal:number;
    iva:number;
    total:number;
    totalprod:number;
    
    
    constructor(){
        this.prodadds =[];
        this.subtotal =0;
        this.iva=0;
        this.total=0;  
        this.totalprod=0;    
    }
    addProduct(prodadd:IProdadds):void{             
        this.subtotal += prodadd.precio * prodadd.cantidad +prodadd.Propina;
        this.iva += ((prodadd.precio * prodadd.cantidad)* 0.12);
        this.total = (this.iva +this.subtotal);          
        this.totalprod +=prodadd.cantidad;      
        this.prodadds.push(prodadd);  
    }
    verProdadd(){
        this.prodadds.forEach((prodadd)=>{
            console.log("Nombre:",prodadd.nombre,"|cantidad: "+prodadd.cantidad, "|costo: "+prodadd.precio.toFixed(2) ,"|Propina: "+prodadd.Propina?.toFixed(2));                 
        })
    }
    FacturaIva(){        
            console.log("I.V.A:12% : ",this.iva.toFixed(2))
            console.log("Subtotal: ya incluye propina:", this.subtotal.toFixed(2))                            
            console.log("Total: ", this.total.toFixed(2))  
            console.log("Total de productos: ", this.totalprod)  
                  
    }
    factimp(){
        this.verProdadd();
        this.FacturaIva();
    }
    
}
interface IProdadds{    
    nombre:string;
    precio:number;
    cantidad:number;
    Propina:number;
    cod?:string,
}
const factura = new Factura();
factura.addProduct({nombre:"rufles",precio:0.50, cantidad:1,Propina:0.50});
factura.addProduct({nombre:"cachitos",precio:0.10, cantidad:2,Propina:0.50});
factura.factimp();