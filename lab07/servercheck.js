import chalk from 'chalk';//imports chalk module to style output to command line

export default function check(){ //sets function to export as module "check"
    setInterval(function () {

        console.log(chalk.blue.bold("The server is still running.") );
        }, 25000);
        
        //updates every 25000ms if the server is still operational
        //and outputs to console
}