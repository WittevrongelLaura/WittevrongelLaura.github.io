import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            sortSchema: true,
            autoSchemaFile: true,
            playground: true,
        }),

        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: 'mongodb',
                url: "mongodb://localhost:27038/api",
                entities: [__dirname + '/../**/*.entity.{js,ts}'],
                synchronize: true, //carefull
                useNewUrlParser: true,
                useUnifiedTopology: true, //disable deprecated warnings
            }),

            dataSourceFactory:async (options) => {
                const dataSource = await new DataSource(options).initialize()
                return dataSource
            }
        })

    ],
})

export class BootstrapModule{}