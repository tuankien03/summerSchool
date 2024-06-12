import mongoose from 'mongoose';
import os from 'os';
import process from 'process';

const _SECONDS = 5000;

const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of connections: ${numConnection}`);
    return numConnection;
}

const checkOverload = () => {
    setInterval(() => {
        const numConnection = countConnect();
        const numCores = os.cpus().length;
        const menoryUsage = process.memoryUsage().rss;
        const maxConnection = numCores * 5;
        console.log('=====================');
        console.log('System Information')
        console.log('number of connections: ', numConnection)
        console.log(`Number of cores: ${numCores}`);
        console.log(`Memory usage: ${menoryUsage / 1024 / 1024} MB`);
        if(numConnection > maxConnection) {
            console.log('CPUs is Overload!!!');
        }

    }, _SECONDS)
}

export  {countConnect, checkOverload};