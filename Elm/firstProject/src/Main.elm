module Main exposing (Model)

import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick, onDoubleClick)


type alias Model =
    Int


type Msg
    = Increment
    | Decrement
    | Reset


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            model + 1

        Decrement ->
            model - 1

        Reset ->
            model - model


view : Model -> Html Msg
view model =
    div []
        [ button [ onDoubleClick Decrement ] [ text "-" ]
        , div [] [ text (String.fromInt model) ]
        , button [ onClick Increment ] [ text "+" ]
        ]
