const mongoose =  require( 'mongoose' );

async function main(){
    try {
        await mongoose.connect('mongodb+srv://ruanpascoal:(senha)@cluster0.i3pgb13.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("foi");
    } catch (error) {
        console.log('ERRO' + error);
    };
    }


module.exports = main