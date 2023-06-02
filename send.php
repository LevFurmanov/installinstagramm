<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "6281001578:AAHg0xUivH5c6CVJoRcXXvqEAkqDSIt1KVs";

//Сюда вставляем chat_id
$chat_id = "-1001970013494";

//Определяем переменные для передачи данных из нашей формы
// if ($_POST['act'] == 'order') {
    $name = ($_GET['name']);
    $phone = ($_GET['tel']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        "Телеграм:" => $name,
        "Телефон:" => $phone
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        echo("{ success: true }");
    }

//А здесь сообщение об ошибке при отправке
    else {
        echo("{ success: false }");
    }
// }

?>