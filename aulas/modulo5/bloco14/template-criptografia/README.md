# EXERCÍCIO 1

## a.
O round, ou cost, é o fator que controla o quanto de tempo é necessário para calcular um hash. Onde quanto maior o número, mais vezes é rodado o hash. O salt é um texto aleatório adicionado à string antes de ser aplicado o hash. 
O valor recomendado do round depende muito do computador onde ele está sendo processado, onde o 12 é um número aceitável para máquinas mais leves, porém quando maior o valor, maior a segurança.
Eu utilizei o 12 por motivos didáticos e porque minha máquina não é tão boa.

## b. 
    generateHash = async (s: string): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(s, salt);
        return result
    }

## c.
    compareHash = async (str: string, hash: string): Promise<boolean> => {
        const result = await bcrypt.compare(str, hash)
        return result
    }