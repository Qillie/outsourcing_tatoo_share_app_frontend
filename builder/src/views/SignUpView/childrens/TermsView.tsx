//* Import libraries
import React from "react"
import { ScrollView, Text, View } from 'react-native';
import { useNavigate } from "react-router-native";

//* Import modules
import { Avatar, Divider, Typography } from "../../../core/display";
import { Box } from "../../../core/layout";
import { Button, IconButton } from "../../../core/input";
import ThemeCoreSingleton from '../../../core/design/ThemeCore/ThemeCoreSingleton';

//* Import interfaces
import ITermsView from "../interfaces/ITermsView"

//* Import contexts
import { SignUpContext } from "../components/SignUpContext";



const TermsView = (props: ITermsView) => {
    //* Modules
    const navigate = useNavigate()

    //* Received contexts
    const { 
        serviceTermAgreement, setServiceTermAgreement, 
        privacyTermAgreement, setPrivacyTermAgreement 
    } = React.useContext(SignUpContext)

    //* States
    const [agreeAllTerms, setAgreeAllTerms] = React.useState<boolean>(false)
    const [serviceTerm, setServiceTerm] = React.useState<string>(`개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.

    1. 수집하는 개인정보
    이용자는 회원가입을 하지 않아도 정보 검색, 뉴스 보기 등 대부분의 네이버 서비스를 회원과 동일하게 이용할 수 있습니다. 이용자가 메일, 캘린더, 카페, 블로그 등과 같이 개인화 혹은 회원제 서비스를 이용하기 위해 회원가입을 할 경우, 네이버는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.
    
    회원가입 시점에 네이버가 이용자로부터 수집하는 개인정보는 아래와 같습니다.
    - 회원 가입 시에 ‘아이디, 비밀번호, 이름, 생년월일, 성별, 휴대전화번호’를 필수항목으로 수집합니다. 만약 이용자가 입력하는 생년월일이 만14세 미만 아동일 경우에는 법정대리인 정보(법정대리인의 이름, 생년월일, 성별, 중복가입확인정보(DI), 휴대전화번호)를 추가로 수집합니다. 그리고 선택항목으로 이메일 주소를 수집합니다.
    - 단체아이디로 회원가입 시 단체아이디, 비밀번호, 단체이름, 이메일주소, 휴대전화번호를 필수항목으로 수집합니다. 그리고 단체 대표자명을 선택항목으로 수집합니다.
    서비스 이용 과정에서 이용자로부터 수집하는 개인정보는 아래와 같습니다.
    - 회원정보 또는 개별 서비스에서 프로필 정보(별명, 프로필 사진)를 설정할 수 있습니다. 회원정보에 별명을 입력하지 않은 경우에는 마스킹 처리된 아이디가 별명으로 자동 입력됩니다.
    
    - 네이버 내의 개별 서비스 이용, 이벤트 응모 및 경품 신청 과정에서 해당 서비스의 이용자에 한해 추가 개인정보 수집이 발생할 수 있습니다. 추가로 개인정보를 수집할 경우에는 해당 개인정보 수집 시점에서 이용자에게 ‘수집하는 개인정보 항목, 개인정보의 수집 및 이용목적, 개인정보의 보관기간’에 대해 안내 드리고 동의를 받습니다.
    
    서비스 이용 과정에서 IP 주소, 쿠키, 서비스 이용 기록, 기기정보, 위치정보가 생성되어 수집될 수 있습니다. 또한 이미지 및 음성을 이용한 검색 서비스 등에서 이미지나 음성이 수집될 수 있습니다.
    구체적으로 1) 서비스 이용 과정에서 이용자에 관한 정보를 자동화된 방법으로 생성하여 이를 저장(수집)하거나,
    2) 이용자 기기의 고유한 정보를 원래의 값을 확인하지 못 하도록 안전하게 변환하여 수집합니다. 서비스 이용 과정에서 위치정보가 수집될 수 있으며,
    네이버에서 제공하는 위치기반 서비스에 대해서는 '네이버 위치기반서비스 이용약관'에서 자세하게 규정하고 있습니다.
    이와 같이 수집된 정보는 개인정보와의 연계 여부 등에 따라 개인정보에 해당할 수 있고, 개인정보에 해당하지 않을 수도 있습니다.
    
    2. 수집한 개인정보의 이용
    네이버 및 네이버 관련 제반 서비스(모바일 웹/앱 포함)의 회원관리, 서비스 개발・제공 및 향상, 안전한 인터넷 이용환경 구축 등 아래의 목적으로만 개인정보를 이용합니다.
    
    - 회원 가입 의사의 확인, 연령 확인 및 법정대리인 동의 진행, 이용자 및 법정대리인의 본인 확인, 이용자 식별, 회원탈퇴 의사의 확인 등 회원관리를 위하여 개인정보를 이용합니다.
    - 콘텐츠 등 기존 서비스 제공(광고 포함)에 더하여, 인구통계학적 분석, 서비스 방문 및 이용기록의 분석, 개인정보 및 관심에 기반한 이용자간 관계의 형성, 지인 및 관심사 등에 기반한 맞춤형 서비스 제공 등 신규 서비스 요소의 발굴 및 기존 서비스 개선 등을 위하여 개인정보를 이용합니다.
    - 법령 및 네이버 이용약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재, 계정도용 및 부정거래 방지, 약관 개정 등의 고지사항 전달, 분쟁조정을 위한 기록 보존, 민원처리 등 이용자 보호 및 서비스 운영을 위하여 개인정보를 이용합니다.
    - 유료 서비스 제공에 따르는 본인인증, 구매 및 요금 결제, 상품 및 서비스의 배송을 위하여 개인정보를 이용합니다.
    - 이벤트 정보 및 참여기회 제공, 광고성 정보 제공 등 마케팅 및 프로모션 목적으로 개인정보를 이용합니다.
    - 서비스 이용기록과 접속 빈도 분석, 서비스 이용에 대한 통계, 서비스 분석 및 통계에 따른 맞춤 서비스 제공 및 광고 게재 등에 개인정보를 이용합니다.
    - 보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할 수 있는 서비스 이용환경 구축을 위해 개인정보를 이용합니다.
    `)
    const [privacyTerm, setPrivacyTerm] = React.useState<string>("")

    //* Functions
    const onClickToggleButton = (value: boolean, setter: React.Dispatch<React.SetStateAction<boolean>>) => {
        //* Set
        const tempValue = !value

        if (tempValue == false) {
            setAgreeAllTerms(false)
        }
        
        setter(tempValue)
    }

    const onClickAgreeAllButton = () => {
        //* Set
        const tempAgreeAllterms = !agreeAllTerms
        setServiceTermAgreement(tempAgreeAllterms)
        setPrivacyTermAgreement(tempAgreeAllterms)
        setAgreeAllTerms(tempAgreeAllterms)
    }

    const disableNextButton = () => {
        if (serviceTermAgreement && privacyTermAgreement) {
            return false
        } else {
            return true
        }
    }

    return (
        <ScrollView style={{height: "100%", paddingTop: 20}}>
            <Box pb={250} flexDirection="column">
                {/* Agree all terms */}
                <Box mb={30}>
                    <Box alignY={"center"}>
                        {/* Toggle button */}
                        <Box mr={10}>
                            <IconButton 
                                iconName="check"
                                iconSize={23}
                                buttonSize={32}
                                buttonPalette={(agreeAllTerms) ? "primary" : "grey"}
                                variant={(agreeAllTerms) ? "contained" : "outlined"}
                                onClick={onClickAgreeAllButton}
                            />
                        </Box>

                        {/* Title */}
                        <Box flexDirection="column">
                            <Typography
                                variant="h5"
                            >
                                이용약관, 개인정보 수집 및 이용,
                            </Typography>

                            <Typography
                                variant="h5"
                            >
                                서비스 이용약관 동의에 모두 동의합니다.
                            </Typography>
                        </Box>
                    </Box>

                    {/* term info */}
                    <Box>

                    </Box>
                </Box>

                {/* Service term */}
                <Box flexDirection="column" mb={30}>
                    <Box alignY={"center"} mb={15}>
                        {/* Toggle button */}
                        <Box mr={10}>
                            <IconButton 
                                iconName="check"
                                iconSize={20}
                                buttonSize={28}
                                buttonPalette={(serviceTermAgreement) ? "primary" : "grey"}
                                variant={(serviceTermAgreement) ? "contained" : "outlined"}
                                onClick={
                                    () => {
                                        onClickToggleButton(
                                            serviceTermAgreement,
                                            setServiceTermAgreement
                                        )
                                    }
                                }
                            />
                        </Box>

                        {/* Title */}
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="500"
                            >
                                서비스 이용약관 동의
                            </Typography>
                        </Box>
                    </Box>

                    {/* term info */}
                    <Box>
                        <Box
                            borderColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "400")}
                            borderWidth={1}
                            width={"100%"}  
                            overflow={"scroll"}
                            height={100}
                        >
                            <ScrollView>
                                <Box
                                    p={10}
                                    
                                >
                                    <Typography>
                                        {serviceTerm}
                                    </Typography>
                                </Box>
                            </ScrollView>
                        </Box>
                    </Box>
                </Box>

                {/* Privacy term */}
                <Box flexDirection="column" mb={40}>
                    <Box alignY={"center"} mb={15}>
                        {/* Toggle button */}
                        <Box mr={10}>
                            <IconButton 
                                iconName="check"
                                iconSize={20}
                                buttonSize={28}
                                buttonPalette={(privacyTermAgreement) ? "primary" : "grey"}
                                variant={(privacyTermAgreement) ? "contained" : "outlined"}
                                onClick={
                                    () => {
                                        onClickToggleButton(
                                            privacyTermAgreement,
                                            setPrivacyTermAgreement
                                        )
                                    }
                                }
                            />
                        </Box>

                        {/* Title */}
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="500"
                            >
                                개인정보 수집 및 이용 동의
                            </Typography>
                        </Box>
                    </Box>

                    {/* term info */}
                    <Box>
                        <Box
                            borderColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "400")}
                            borderWidth={1}
                            width={"100%"}  
                            overflow={"scroll"}
                            height={100}
                        >
                            <ScrollView>
                                <Box
                                    p={10}
                                    
                                >
                                    <Typography>
                                        {serviceTerm}
                                    </Typography>
                                </Box>
                            </ScrollView>
                        </Box>
                    </Box>
                </Box>

                {/* Controller section */}
                <Box>
                    <Button
                        onClick={() => {
                            navigate("/sign_up/user_info")
                        }}
                        fullWidth
                        disabled={disableNextButton()}
                        variant="contained"
                        buttonPalette="primary"
                        borderRadius={5}
                        typographyProps={{
                            variant: "h6"
                        }}
                        size={"large"}
                    >
                        다음으로
                    </Button>
                </Box>
            </Box>
        </ScrollView>
    )
}

export default TermsView