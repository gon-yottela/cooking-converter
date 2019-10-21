$(function() {

  // 温度の変換
  $('#btn1').click(function() {

    //定義と計算式
    const celsius = $('#celsius').val();
    const convertedToFahrenheit = celsius * 1.8 + 32;
    const fahrenheit = $('#fahrenheit').val();
    const convertedToCelsius = (fahrenheit - 32) / 1.8;

    //摂氏に入力があったら華氏に計算後の数値を出力する
    if (celsius !== '' && fahrenheit === '') {
      $('#fahrenheit').val(Math.round(convertedToFahrenheit));
      if (isNaN(celsius)) {
        $('#fahrenheit').val("ERROR");
      }

    //華氏に入力があったら摂氏に計算後の数値を出力する
    } else if (fahrenheit !== "" && celsius === '') {
      $('#celsius').val(Math.round(convertedToCelsius));
      if (isNaN(fahrenheit)) {
        $('#celsius').val("ERROR");
      }

    //どちらにも入力されてる時にボタンを押すと両方数値クリア
    } else {
      $('#celsius').val('');
      $('#fahrenheit').val('');
    }

  });

  // カップの変換
  $('#btn2').click(function() {

    //入力値の定義
    const jCup = $('#j-cup').val();
    const ml = $('#ml').val();
    const aCup = $('#a-cup').val();
    const flOz = $('#fl-oz').val();

    //計算式
    const jCupToMl = jCup * 200;
    const jCupToACup = jCup / 1.182941;
    const jCupToFlOz = jCupToMl / 29.574;

    const mlToJCup = ml / 200;
    const mlToACup = ml * 0.00422680;
    const mlToFlOz = ml / 29.574;

    const aCupToJCup = aCup * 1.182941;
    const aCupToMl = aCup / 0.0042268;
    const aCupToFlOz = aCup * 8;

    const flOzToMl = flOz * 29.574;
    // ↑ 定数を使うために順番前後しました ↓
    const flOzToJCup = flOzToMl / 200;
    const flOzToACup = flOz / 8;

    //カップに入力があったら他の欄に計算後の数値を出力する
  //カップに入力があったら他の欄に計算後の数値を出力する
  if (jCup !== '' && ml === '' && aCup === '' && flOz === '') {
    $('#ml').val(Math.round(jCupToMl * 10) / 10);
    $('#a-cup').val(Math.round(jCupToACup * 100) / 100);
    $('#fl-oz').val(Math.round(jCupToFlOz * 100) / 100);

    // もし半角数字以外が入力されたら「ERROR」を表示する
    if (isNaN(jCup)) {
      $('#ml, #a-cup, #fl-oz').val("ERROR");
    }

  // mlに入力があったら他の欄に計算後の数値を出力する
  } else if (ml !== '' && jCup === '' && aCup === '' && flOz === '') {
    $('#j-cup').val(Math.round(mlToJCup * 100) / 100);
    $('#a-cup').val(Math.round(mlToACup * 100) / 100);
    $('#fl-oz').val(Math.round(mlToFlOz * 100) / 100);

    // もし半角数字以外が入力されたら「ERROR」を表示する
    if (isNaN(ml)) {
      $('#j-cup, #a-cup, #fl-oz').val("ERROR");
    }

  // cups に入力があったら他の欄に計算後の数値を出力する
  } else if (aCup !== '' && jCup === '' && ml === '' && flOz === '') {
    $('#j-cup').val(Math.round(aCupToJCup * 100) / 100);
    $('#ml').val(Math.round(aCupToMl * 10) / 10);
    $('#fl-oz').val(Math.round(aCupToFlOz * 100) / 100);

    // もし半角数字以外が入力されたら「ERROR」を表示する
    if (isNaN(aCup)) {
      $('#j-cup, #ml, #fl-oz').val("ERROR");
    }

  // fl oz に入力があったら他の欄に計算後の数値を出力する
  } else if (flOz !== '' && jCup === '' && ml === '' && aCup === '') {
    $('#j-cup').val(Math.round(flOzToJCup * 100) / 100);
    $('#ml').val(Math.round(flOzToMl * 10) / 10);
    $('#a-cup').val(Math.round(flOzToACup * 100) / 100);

    // もし半角数字以外が入力されたら「ERROR」を表示する
    if (isNaN(flOz)) {
      $('#j-cup, #ml, #a-cup').val("ERROR");
    }

    // 2箇所以上数値が入力されていたら全てクリアする
    //---------------力技で全部の組み合わせをいれよう---------------
    // だけどまずはjCupの分岐からいこう

  } else if (jCup !== '' && ml !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  } else if (jCup !== '' && ml !== '' && aCup !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  } else if (jCup !== '' && aCup !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  } else if (jCup !== '' && aCup !== '' && flOz !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  } else if (jCup !== '' && flOz !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  // ここからmlの分岐
  } else if (ml !== '' && jCup !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  } else if (ml !== '' && jCup !== '' && aCup !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  } else if (ml !== '' && jCup !== '' && aCup !== '' && flOz !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  } else if (ml !== '' && aCup !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  } else if (ml !== '' && aCup !== '' && flOz !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  // ここからaCupの分岐
  } else if (aCup !== '' && jCup !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  } else if (aCup !== '' && jCup !== '' && ml !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  } else if (aCup !== '' && jCup !== '' && ml !== '' && flOz !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  } else if (aCup !== '' && ml !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  } else if (aCup !== '' && ml !== '' && flOz !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  // ここからflOzの分岐
  } else if (flOz !== '' && jCup !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  } else if (flOz !== '' && jCup !== '' && ml !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  } else if (flOz !== '' && jCup !== '' && ml !== '' && aCup !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  } else if (flOz !== '' && ml !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');

  } else if (flOz !== '' && ml !== '' && aCup !== '') {
    $('#j-cup, #ml, #a-cup, #fl-oz').val('');
  }

  });



  //重さの変換
  $('#btn3').click(function() {

    // 定義
    const g = $('#g').val();
    const oz = $('#oz').val();
    const lb = $('#lb').val();

    // 計算式
    const gToOz = g / 28.35;
    const gToLb = g / 453.592;

    const ozToG = oz * 28.35;
    const ozToLb = oz / 16;

    const lbToG = lb * 453.592;
    const lbToOz = lb * 16;

    // gに入力があったらozとlbに数値を表示
    if (g !== '' && oz === '' && lb === '') {
      $('#oz').val(Math.round(gToOz * 100) / 100);
      $('#lb').val(Math.round(gToLb * 100) / 100);

      // 数字以外だったらERRORを表示
      if (isNaN(g)) {
        $('#oz, #lb').val("ERROR");
      }

    //2ヶ所以上入力がある場合
  } else if (g !== '' && oz !== '') {
      $('#g, #oz, #lb').val('');
  } else if (g !== '' && oz !== '' && lb !== '') {
      $('#g, #oz, #lb').val('');

    // ozに入力があったらgとlbに数値を表示
  } else if (oz !== '' && g === '' && lb === '') {
      $('#g').val(Math.round(ozToG * 10) / 10);
      $('#lb').val(Math.round(ozToLb * 100) / 100);

      // 数字以外だったらERRORを表示
      if (isNaN(oz)) {
        $('#g, #lb').val("ERROR");
      }

    //2ヶ所以上入力がある場合
  } else if (oz !== '' && lb !== '') {
      $('#g, #oz, #lb').val('');


    // lbに入力があったらgとozに数値を表示
  } else if (lb !== '' && g === '' && oz === '') {
      $('#g').val(Math.round(lbToG * 10) / 10);
      $('#oz').val(Math.round(lbToOz * 100) / 100);


      // 数字以外だったらERRORを表示
      if (isNaN(lb)) {
        $('#g, #oz').val("ERROR");
      }
  }

  });




});
