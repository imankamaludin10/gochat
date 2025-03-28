package main

import (
	"log"
	"server/db"
	internalUser "server/internal/user"
	"server/internal/ws"
	"server/router"
)

func main() {
	dbConn, err := db.NewDatabase()

	if err != nil {
		log.Fatalf("could not initialize database connection: %s", err)
	}

	userRep := internalUser.NewRepository(dbConn.GetDB())
	userSvc := internalUser.NewService(userRep)
	userHandler := internalUser.NewHandler(userSvc)

	hub := ws.NewHub()
	wsHandler := ws.NewHandler(hub)
	go hub.Run()


	router.InitRouter(userHandler, wsHandler)
	router.Start("0.0.0.0:9092")

}