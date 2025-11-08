import {
	SPopExit,
	SPopExitBlock,
	SPopExitContainer,
	SPopExitExitNo,
	SPopExitExitYes,
	SPopExitForm,
	SPopExitFormGroup,
	SPopExitTtl,
} from './PopExit.styled'

export default function PopExit({ togglePopExit }) {
	return (
		<SPopExit id='popExit'>
			<SPopExitContainer>
				<SPopExitBlock>
					<SPopExitTtl>
						<h2>Выйти из аккаунта?</h2>
					</SPopExitTtl>
					<SPopExitForm id='formExit' action='#'>
						<SPopExitFormGroup>
							<SPopExitExitYes id='exitYes'>
								<a href='modal/signin.html'>Да, выйти</a>
							</SPopExitExitYes>
							<SPopExitExitNo id='exitNo' onClick={togglePopExit}>
								<a href='#'>Нет, остаться</a>
							</SPopExitExitNo>
						</SPopExitFormGroup>
					</SPopExitForm>
				</SPopExitBlock>
			</SPopExitContainer>
		</SPopExit>
	)
}
