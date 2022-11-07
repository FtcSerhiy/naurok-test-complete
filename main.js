document
    .querySelector(".generate")
	.addEventListener("click", () => {
		const testName = document.querySelector('#name').value
		const questions = document.querySelector('#questions').value
		const questionTime = document.querySelector('#question_time').value
		const html = `
		<nav id="w0" class="navbar-inverse navbar-static-top main-nav navbar" style="background: #40596b; padding:10px; min-height:auto; box-shadow:none;">
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-sm-4 col-xs-4"></div>
					<div class="col-md-4 col-sm-4 col-xs-4">
						<div class="text-center">
							<img src="NaurokComplete_files/logo.png" alt="На Урок для вчителя" height="40">
						</div>
					</div>
					<div class="col-md-4 col-sm-4 col-xs-4"></div>
				</div>
			</div>
		</nav>
		<div class="homework-result-page">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="homework-result-info animated fadeIn">
							<div class="homework-result-head">
								<div class="row">
									<div class="col-md-9 col-sm-8 col-xs-7">
										<div class="homework-personal-stat-test">${testName}</div>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-5">
										<div class="homework-personal-stat-number">${questions}<span>запитань</span></div>
									</div>
								</div>
							</div>
							<div class="row homework-personal-stat-row">
								<div class="col-md-9 col-sm-8 col-xs-7">
									<div class="homework-personal-stat-label text-right">Оцінка</div>
								</div>
								<div class="col-md-3 col-sm-4 col-xs-5">
									<div class="homework-personal-stat-value"><span>12 / 12</span> балів</div>
								</div>
							</div>
							<div class="row homework-personal-stat-row">
								<div class="col-md-3 col-sm-3 col-xs-12">
									<div class="homework-personal-stat-label">Сума балів</div>
								</div>
								<div class="col-md-3 col-sm-3 col-xs-12">
									<div class="homework-personal-stat-value"><span>${questions} / ${questions}</span></div>
								</div>
								<div class="col-md-3 col-sm-3 col-xs-12">
									<div class="homework-personal-stat-label text-right">Результат</div>
								</div>
								<div class="col-md-3 col-sm-3 col-xs-12">
									<div class="homework-personal-stat-value"><span>100</span> %</div>
								</div>
							</div>
							<div class="row homework-personal-stat-row">
								<div class="col-md-3  col-sm-3">
									<div class="homework-personal-stat-label">Точність</div>
								</div>
								<div class="col-md-9 col-sm-9">
									<div class="progress">
										<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
100%</div>
										<div class="correct-label">Правильно</div>
											<div class="incorrect-label">Неправильно</div>
										</div>
 									</div>
								</div>
								<div class="row homework-personal-stat-row">
									<div class="col-md-4  col-sm-4 col-xs-6">
										<div class="homework-personal-stat-value"><span>${questions}</span> правильних</div>
									</div>
									<div class="col-md-4  col-sm-4 col-xs-6">
										<div class="homework-personal-stat-value"><span>0</span> неправильних</div>
									</div>
									<div class="col-md-4  col-sm-4 hidden-xs">
										<div class="homework-personal-stat-value"><span>0</span> пропущено</div>
									</div>
								</div>
								<div class="row homework-personal-stat-row">
									<div class="col-md-6  col-sm-6  col-xs-6">
										<div class="homework-personal-stat-value">Всього часу <span>${questionTime * questions} сек</span></div>
									</div>
									<div class="col-md-6  col-sm-6  col-xs-6">
										<div class="homework-personal-stat-value">Ср. час / запитання <span>${questionTime} сек</span></div>
									</div>
								</div>
								<div class="homework-result-footer">
									<div class="row homework-personal-stat-row">
										<div class="col-md-6 col-md-offset-3">
											<a class="btn btn-orange btn-lg btn-block" href="https://naurok.com.ua/test/start/1751780">Спробувати ще раз</a> </div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div id="lightboxOverlay" class="lightboxOverlay" style="display: none;"></div>
				<div id="lightbox" class="lightbox" style="display: none;">
					<div class="lb-outerContainer">
						<div class="lb-container">
							<img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
							<div class="lb-nav">
								<a class="lb-prev" href=""></a>
								<a class="lb-next" href=""></a>
							</div>
							<div class="lb-loader">
								<a class="lb-cancel"></a>
							</div>
						</div>
					</div>
					<div class="lb-dataContainer">
						<div class="lb-data">
							<div class="lb-details">
								<span class="lb-caption"></span>
								<span class="lb-number"></span>
							</div>
							<div class="lb-closeContainer">
								<a class="lb-close"></a>
							</div>
						</div>
					</div>
				</div>`

		document.body.innerHTML = html
})

