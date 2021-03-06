module Main exposing (Model, Msg(..), update, view)

import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)



-- MODEL:


type alias Model =
    Int



-- UPDATE:


type Msg
    = Increment
    | Decrement


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            model + 1

        Decrement ->
            model - 1



-- VIEW:


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick Decrement ] [ text "-" ]
        , div [] [ text (String.fromInt model) ]
        , button [ onClick Increment ] [ text "+" ]
        ]
